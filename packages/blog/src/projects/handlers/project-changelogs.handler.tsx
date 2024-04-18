import type { FastifyPluginAsync } from 'fastify';
import { contentType, statusCode } from '../../http/index.js';
import { DefaultLayout, render } from '../../ui/index.js';

export const projectChangelogsHandler: FastifyPluginAsync = async function (
  app,
) {
  app.get<{ Params: ProjectChangelogsParams }>(
    '/projects/:slug/changelogs',
    async (request, reply) => {
      return reply
        .status(statusCode.ok)
        .type(contentType.html)
        .send(
          render(
            <DefaultLayout
              currentPath={`/projects/${request.params.slug}/changelogs`}
              env={app.env}>
              {request.params.slug} changelogs
            </DefaultLayout>,
          ),
        );
    },
  );
};

interface ProjectChangelogsParams {
  slug: string;
}
