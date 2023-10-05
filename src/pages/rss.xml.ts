import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { DESCRIPTION, TITLE } from '../shared/intro-texts.ts';
import { Post } from '../shared/post.ts';
import { compareDesc } from 'date-fns';

export async function GET(context: APIContext) {
  const entries = await getCollection('posts');

  const posts = await Promise.all(
    entries.map((entry) => Post.fromEntry(entry)),
  );

  return rss({
    title: TITLE,
    description: DESCRIPTION,
    site: context.site!,
    items: posts
      .map((post, index) => {
        const entry = entries[index];

        return {
          title: post.title,
          description: post.description,
          pubDate: entry.data.publishedAt,
          link: post.fullPath,
          categories: entry.data.tags,
          author: 'vorant94@gmail.com',
        };
      })
      .sort((a, b) => compareDesc(a.pubDate, b.pubDate)),
  });
}
