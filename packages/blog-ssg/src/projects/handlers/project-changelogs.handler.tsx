import { render } from '@/shared/render.js';
import { DefaultLayout } from '@/ui/layouts/DefaultLayout.js';
import type { FastifyPluginAsync } from 'fastify';

export const projectChangelogsHandler: FastifyPluginAsync = async function (
  app,
) {
  app.get<{ Params: { slug: string } }>(
    '/projects/:slug/changelogs',
    async (request, reply) => {
      return reply
        .type('text/html')
        .send(
          render(
            <DefaultLayout>{request.params.slug} changelogs</DefaultLayout>,
          ),
        );
    },
  );
};
