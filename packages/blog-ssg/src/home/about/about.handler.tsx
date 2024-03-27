import { render } from '@/core/render.js';
import type { FastifyPluginAsync } from 'fastify';
import { AboutTemplate } from './about.template.js';

export const aboutHandler: FastifyPluginAsync = async function (app) {
  app.get('/about', async (_, reply) => {
    reply.type('text/html');
    return render(<AboutTemplate />);
  });
};
