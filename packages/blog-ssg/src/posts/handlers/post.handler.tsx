import { render } from '@/core/render.js';
import { DefaultLayout } from '@/ui/layouts/DefaultLayout.js';
import type { FastifyPluginAsync } from 'fastify';

export const postHandler: FastifyPluginAsync = async function (app) {
  app.get<{ Params: { slug: string } }>(
    '/posts/:slug',
    async (request, reply) => {
      reply.type('text/html');
      return render(<DefaultLayout>{request.params.slug}</DefaultLayout>);
    },
  );
};
