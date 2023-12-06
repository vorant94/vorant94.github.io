import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import { Post } from '../shared/post.ts';
import { PROFILE } from '../shared/profile.ts';

export async function GET(context: APIContext) {
  const entries = Post.sortEntries(await getCollection('posts'));

  const posts = await Promise.all(
    entries.map((entry) => Post.fromEntry(entry)),
  );

  return rss({
    title: PROFILE.title,
    description: PROFILE.description,
    site: context.site!,
    items: posts.map((post, index) => {
      const entry = entries[index];

      return {
        title: post.title,
        description: post.description,
        pubDate: entry.data.publishedAt,
        link: post.fullPath,
        categories: entry.data.tags,
        author: PROFILE.email,
      };
    }),
  });
}
