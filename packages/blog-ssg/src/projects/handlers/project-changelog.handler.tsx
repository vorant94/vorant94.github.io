import { render } from '@/shared/render.js';
import { DefaultLayout } from '@/ui/layouts/DefaultLayout.js';
import type { FastifyPluginAsync } from 'fastify';

export const projectChangelogHandler: FastifyPluginAsync = async function (
  app,
) {
  app.get<{ Params: { slug: string; version: string } }>(
    '/projects/:slug/changelogs/:version',
    async (request, reply) => {
      return reply.type('text/html').send(
        render(
          <DefaultLayout>
            {request.params.slug} {request.params.version} changelogs
          </DefaultLayout>,
        ),
      );
    },
  );
};
