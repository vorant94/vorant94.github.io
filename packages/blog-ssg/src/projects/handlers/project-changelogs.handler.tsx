import { render } from '@/core/render.js';
import { DefaultLayout } from '@/ui/layouts/DefaultLayout.js';
import type { FastifyPluginAsync } from 'fastify';

export const projectChangelogsHandler: FastifyPluginAsync = async function (
  app,
) {
  app.get<{ Params: { slug: string } }>(
    '/projects/:slug/changelogs',
    async (request, reply) => {
      reply.type('text/html');
      return render(
        <DefaultLayout>{request.params.slug} changelogs</DefaultLayout>,
      );
    },
  );
};
