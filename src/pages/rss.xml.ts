import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { DESCRIPTION, TITLE } from '../shared/intro-texts.ts';

export async function GET(context: APIContext) {
  const posts = await getCollection('posts');

  return rss({
    title: TITLE,
    description: DESCRIPTION,
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
