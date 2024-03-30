import { render } from '@/core/render.js';
import { DefaultLayout } from '@/ui/layouts/DefaultLayout.js';
import type { FastifyPluginAsync } from 'fastify';

export const projectHandler: FastifyPluginAsync = async function (app) {
  app.get<{ Params: { slug: string } }>(
    '/projects/:slug',
    async (request, reply) => {
      return reply
        .type('text/html')
        .send(
          render(
            <DefaultLayout title={`Projects`}>
              {request.params.slug}
            </DefaultLayout>,
          ),
        );
    },
  );
};
