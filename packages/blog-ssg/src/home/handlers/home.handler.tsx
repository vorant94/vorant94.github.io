import { Intro } from '@/home/components/Intro.js';
import { render } from '@/shared/render.js';
import { DefaultLayout } from '@/ui/layouts/DefaultLayout.js';
import type { FastifyPluginAsync } from 'fastify';

export const homeHandler: FastifyPluginAsync = async function (app) {
  app.get('/', async (_, reply) => {
    return reply.type('text/html').send(
      render(
        <DefaultLayout>
          <Intro />
        </DefaultLayout>,
      ),
    );
  });
};
