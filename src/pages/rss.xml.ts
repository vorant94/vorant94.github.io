import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('posts');

  return rss({
    title: 'vorant94’s Blog',
    description: 'A personal space of yet another full-stack dev',
    site: context.site!,
    items: posts.map(({ data, slug }) => ({
      title: data.title,
      description: data.description,
      pubDate: data.publishedAt,
      link: `/posts/${slug}/`,
      categories: data.tags,
      author: 'vorant94@gmail.com',
    })),
  });
}
