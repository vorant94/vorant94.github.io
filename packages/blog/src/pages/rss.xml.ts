import { sortEntriesByPublishedAt } from '@/shared/collection.helpers';
import { getPostFullPath } from '@/shared/post.helpers';
import { profile } from '@/shared/profile';
import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';

export async function GET(context: APIContext) {
  const posts = sortEntriesByPublishedAt(await getCollection('posts'));

  return rss({
    title: profile.title,
    description: profile.description,
    site: context.site!,
    items: posts.map((post) => {
      const { title, description, publishedAt, tags } = post.data;

      return {
        title: title,
        description: description,
        pubDate: publishedAt,
        link: getPostFullPath(post),
        categories: tags,
        author: profile.email,
      };
    }),
  });
}
