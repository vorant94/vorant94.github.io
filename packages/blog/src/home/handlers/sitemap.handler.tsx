import type { FastifyPluginAsync } from 'fastify';
import { Readable } from 'node:stream';
import { SitemapStream, streamToPromise, type IndexItem } from 'sitemap';
import type { ContentModel } from '../../content/index.js';
import { contentType, statusCode } from '../../http/index.js';
import { getUniqueTags, queryPosts } from '../../posts/index.js';
import { queryAllChangelogs, queryProjects } from '../../projects/index.js';

export const sitemapHandler: FastifyPluginAsync = async function (app) {
  app.get('/sitemap.xml', async (_, reply) => {
    const sitemapStream = new SitemapStream({
      hostname: app.env.BASE_URL,
    });

    const [posts, projects, changelogs] = await Promise.all([
      queryPosts(),
      queryProjects(),
      queryAllChangelogs(),
    ]);
    const tags = getUniqueTags(posts);

    const links: IndexItem[] = [
      { url: '/' },
      { url: '/about' },
      { url: '/posts' },
      { url: '/projects' },
      ...posts.map(contentToIndexItem),
      ...tags.map(tagToIndexItem),
      ...projects.map(contentToIndexItem),
      ...changelogs.map(contentToIndexItem),
    ];

    const sitemap = await streamToPromise(
      Readable.from(links).pipe(sitemapStream),
    );

    return reply
      .status(statusCode.ok)
      .type(contentType.xml)
      .send(sitemap.toString());
  });
};

function contentToIndexItem(content: ContentModel): IndexItem {
  return {
    url: content.path,
  };
}

function tagToIndexItem(tag: string): IndexItem {
  return {
    url: `/tags/${tag}`,
  };
}
