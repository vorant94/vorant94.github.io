import { render } from '@/core/render.js';
import type { FastifyPluginAsync } from 'fastify';
import { HomeTemplate } from './home.template.js';

export const homeHandler: FastifyPluginAsync = async function (app) {
  app.get('/', async (_, reply) => {
    reply.type('text/html');
    return render(<HomeTemplate />);
  });
};
