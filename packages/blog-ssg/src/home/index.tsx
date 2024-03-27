import { render } from '@/core/render.js';
import { Home } from '@/home/Home.js';
import type { FastifyPluginAsync } from 'fastify';

export const home: FastifyPluginAsync = async function (app) {
  app.get('/', async (_, reply) => {
    reply.type('text/html');
    return render(<Home />);
  });
};
