import type { FastifyPluginAsync } from 'fastify';
import RSS from 'rss';
import { profile } from '../../config/index.js';
import { contentType, statusCode } from '../../http/index.js';
import { queryPosts } from '../../posts/index.js';

export const rssHandler: FastifyPluginAsync = async function (app) {
  app.get('/rss.xml', async (_, reply) => {
    const rss = new RSS({
      title: profile.title,
      description: profile.description,
      feed_url: `${app.env.BASE_URL}/rss.xml`,
      site_url: app.env.BASE_URL,
      language: 'en',
    });

    for (const post of await queryPosts()) {
      rss.item({
        title: post.matter.title,
        description: post.matter.description,
        date: post.matter.publishedAt,
        url: `${app.env.BASE_URL}${post.path}`,
        categories: post.matter.tags,
        author: profile.email,
      });
    }

    return reply.status(statusCode.ok).type(contentType.xml).send(rss.xml());
  });
};
