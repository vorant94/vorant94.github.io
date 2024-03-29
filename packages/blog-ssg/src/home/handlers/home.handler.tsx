import { render } from '@/core/render.js';
import { Intro } from '@/home/components/Intro.js';
import { DefaultLayout } from '@/ui/layouts/DefaultLayout.js';
import type { FastifyPluginAsync } from 'fastify';

export const homeHandler: FastifyPluginAsync = async function (app) {
  app.get('/', async (_, reply) => {
    reply.type('text/html');
    return render(
      <DefaultLayout title={`vorant94's Digital Garden`}>
        <Intro />
      </DefaultLayout>,
    );
  });
};
