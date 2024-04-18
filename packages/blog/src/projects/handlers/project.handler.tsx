import type { FastifyPluginAsync } from 'fastify';
import type { VFile } from 'vfile';
import { isErrnoException } from '../../filesystem/index.js';
import { contentType, sendNotFound, statusCode } from '../../http/index.js';
import { queryChangelogsByProject } from '../../projects/index.js';
import {
  ButtonLink,
  DefaultLayout,
  Icon,
  Text,
  ThemedImage,
  Title,
  cn,
  render,
} from '../../ui/index.js';
import { ProjectChangelogs } from '../components/ProjectChanglelogs.js';
import { Version } from '../components/Version.js';
import { type ProjectModel } from '../models/project.model.js';
import { queryProjectFile } from '../utils/project.query.js';

export const projectHandler: FastifyPluginAsync = async function (app) {
  app.get<{ Params: ProjectParams }>(
    '/projects/:slug',
    async (request, reply) => {
      let projectFile: VFile;
      try {
        projectFile = await queryProjectFile(request.params.slug);
      } catch (e) {
        if (isErrnoException(e)) {
          return sendNotFound(reply);
        }

        throw e;
      }

      // TODO: make VFile generic, didn't work first time, because Vfile.data is type and not interface
      const project = projectFile.data as ProjectModel;
      const changelogs = await queryChangelogsByProject(project.id);

      return reply
        .status(statusCode.ok)
        .type(contentType.html)
        .send(
          render(
            <DefaultLayout
              title={project.matter.name}
              description={project.matter.slogan}
              image={project.matter.logo}
              type={`article`}
              currentPath={project.path}
              env={app.env}>
              <div className={cn(`flex flex-col items-center gap-6`)}>
                <Title base="h1">{project.matter.name}</Title>

                <Version
                  status={project.matter.status}
                  showStatus={true}>
                  {project.matter.version}
                </Version>

                <ThemedImage
                  src={project.matter.demo}
                  srcDark={project.matter.demoDark}
                  alt={'demo'}
                />

                <Text base="em">{project.matter.slogan}</Text>

                <menu className={cn('flex gap-2')}>
                  {project.matter.productionUrl && (
                    <li>
                      <ButtonLink
                        size="sm"
                        target="_blank"
                        href={project.matter.productionUrl}
                        variant={'outlined'}
                        className={cn(
                          'bg-slate-50 dark:bg-slate-900 p-2 flex gap-1.5 items-center',
                        )}>
                        <Icon glyph="globe" />
                        Production
                      </ButtonLink>
                    </li>
                  )}

                  <li>
                    <ButtonLink
                      size="sm"
                      target="_blank"
                      href={project.matter.sourceCodeUrl}
                      variant={'outlined'}
                      className={cn(
                        'bg-slate-50 dark:bg-slate-900 p-2 flex gap-1.5 items-center',
                      )}>
                      <Icon glyph="github" />
                      Source
                    </ButtonLink>
                  </li>
                </menu>
              </div>

              <article
                className={cn(`prose dark:prose-invert prose-img:mx-auto mt-6`)}
                dangerouslySetInnerHTML={{ __html: projectFile.toString() }}
              />

              <ProjectChangelogs changelogs={changelogs} />

              <script
                src="https://giscus.app/client.js"
                data-repo="vorant94/digital-garden"
                data-repo-id="R_kgDOKWcyPw"
                data-category="Projects"
                data-category-id="DIC_kwDOKWcyP84Cd672"
                data-mapping="specific"
                data-term={project.id}
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

interface ProjectParams {
  slug: string;
}
