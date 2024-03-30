import type { FastifyPluginAsync } from 'fastify';
import RSS from 'rss';

export const rssHandler: FastifyPluginAsync = async function (app) {
  app.get('/rss.xml', async (_, reply) => {
    const rss = new RSS({
      title: `vorant94's Digital Garden`,
      description: 'My personal piece of the Internet',
      feed_url: 'http://www.vorant94.io/rss.xml',
      site_url: 'http://www.vorant94.io',
      language: 'en',
    });

    return reply.type('application/xml').send(rss.xml());
  });
};
