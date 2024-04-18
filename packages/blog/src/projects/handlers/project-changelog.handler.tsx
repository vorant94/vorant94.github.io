import type { FastifyPluginAsync } from 'fastify';
import type { VFile } from 'vfile';
import { isErrnoException } from '../../filesystem/index.js';
import { contentType, sendNotFound, statusCode } from '../../http/index.js';
import { DefaultLayout, Title, cn, render } from '../../ui/index.js';
import type { ChangelogModel } from '../models/changelog.model.js';
import { type ProjectModel } from '../models/project.model.js';
import { queryChangelog } from '../utils/changelog.query.js';
import { queryProject } from '../utils/project.query.js';

export const projectChangelogHandler: FastifyPluginAsync = async function (
  app,
) {
  app.get<{ Params: ProjectChangelogParams }>(
    '/projects/:projectSlug/changelogs/:changelogVersion',
    async (request, reply) => {
      let changelogFile: VFile;
      let project: ProjectModel;
      try {
        [changelogFile, project] = await Promise.all([
          queryChangelog(
            request.params.projectSlug,
            request.params.changelogVersion,
          ),
          queryProject(request.params.projectSlug),
        ]);
      } catch (e) {
        if (isErrnoException(e)) {
          return sendNotFound(reply);
        }

        throw e;
      }

      // TODO: make VFile generic, didn't work first time, because Vfile.data is type and not interface
      const changelog = changelogFile.data as ChangelogModel;
      const term = `${project.id}-${changelog.id}`;
      const title = `${project.matter.name} ${changelog.matter.version}`;

      return reply
        .status(statusCode.ok)
        .type(contentType.html)
        .send(
          render(
            <DefaultLayout
              title={title}
              description={project.matter.slogan}
              image={project.matter.logo}
              type={`article`}
              currentPath={changelog.path}
              env={app.env}>
              <div className="flex flex-col gap-6">
                <Title base="h1">{title}</Title>
              </div>

              <article
                className={cn(`prose dark:prose-invert prose-img:mx-auto mt-6`)}
                dangerouslySetInnerHTML={{ __html: changelogFile.toString() }}
              />

              <script
                src="https://giscus.app/client.js"
                data-repo="vorant94/digital-garden"
                data-repo-id="R_kgDOKWcyPw"
                data-category="Changelogs"
                data-category-id="DIC_kwDOKWcyP84Cd674"
                data-mapping="specific"
                data-term={term}
                data-strict="0"
                data-reactions-enabled="1"
                data-emit-metadata="0"
                data-input-position="bottom"
                data-theme="preferred_color_scheme"
                data-lang="en"
                data-loading="lazy"
                crossOrigin="anonymous"
                async
              />
            </DefaultLayout>,
          ),
        );
    },
  );
};

interface ProjectChangelogParams {
  projectSlug: string;
  changelogVersion: string;
}
