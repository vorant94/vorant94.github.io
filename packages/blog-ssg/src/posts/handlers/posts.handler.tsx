import { render } from '@/core/render.js';
import { DefaultLayout } from '@/ui/layouts/DefaultLayout.js';
import type { FastifyPluginAsync } from 'fastify';

export const postsHandler: FastifyPluginAsync = async function (app) {
  app.get('/posts', async (_, reply) => {
    return reply
      .type('text/html')
      .send(render(<DefaultLayout title={`Posts`}>posts</DefaultLayout>));
  });
};
