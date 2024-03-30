import { render } from '@/core/render.js';
import { DefaultLayout } from '@/ui/layouts/DefaultLayout.js';
import type { FastifyPluginAsync } from 'fastify';

export const projectsHandler: FastifyPluginAsync = async function (app) {
  app.get('/projects', async (_, reply) => {
    return reply
      .type('text/html')
      .send(render(<DefaultLayout title={`Projects`}>projects</DefaultLayout>));
  });
};
