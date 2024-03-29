import { render } from '@/core/render.js';
import { DefaultLayout } from '@/ui/layouts/DefaultLayout.js';
import type { FastifyPluginAsync } from 'fastify';

export const projectChangelogHandler: FastifyPluginAsync = async function (
  app,
) {
  app.get<{ Params: { slug: string; version: string } }>(
    '/projects/:slug/changelogs/:version',
    async (request, reply) => {
      reply.type('text/html');
      return render(
        <DefaultLayout>
          {request.params.slug} {request.params.version} changelogs
        </DefaultLayout>,
      );
    },
  );
};
