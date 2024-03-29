import { render } from '@/core/render.js';
import { DefaultLayout } from '@/ui/layouts/DefaultLayout.js';
import type { FastifyPluginAsync } from 'fastify';
import { Intro } from '../components/Intro.js';
import { SocialLinks } from '../components/SocialLinks.js';
import { StayUpToDate } from '../components/StayUpToDate.js';

export const aboutHandler: FastifyPluginAsync = async function (app) {
  app.get('/about', async (_, reply) => {
    reply.type('text/html');
    return render(
      <DefaultLayout title={`About`}>
        <Intro />

        <StayUpToDate />

        <SocialLinks />
      </DefaultLayout>,
    );
  });
};
