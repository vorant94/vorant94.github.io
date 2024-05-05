import type { FastifyPluginAsync } from 'fastify';
import { contentType, statusCode } from '../../http/index.js';
import { DefaultLayout, render } from '../../ui/index.js';
import { Intro } from '../components/Intro.js';
import { SocialLinks } from '../components/SocialLinks.js';
import { StayUpToDate } from '../components/StayUpToDate.js';

export const aboutHandler: FastifyPluginAsync = async function (app) {
  app.get('/about', async (_, reply) => {
    return reply
      .status(statusCode.ok)
      .type(contentType.html)
      .send(
        render(
          <DefaultLayout
            title={`About`}
            currentPath={'/about'}
            env={app.env}>
            <Intro />

            <StayUpToDate />

            <SocialLinks />
          </DefaultLayout>,
        ),
      );
  });
};
