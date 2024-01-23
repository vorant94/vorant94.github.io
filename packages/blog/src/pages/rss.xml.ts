import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import { PROFILE } from '../components';
import { getPostFullPath, sortPostsByPublishedAt } from '../shared';

export async function GET(context: APIContext) {
  const posts = sortPostsByPublishedAt(await getCollection('posts'));

  return rss({
    title: PROFILE.title,
    description: PROFILE.description,
    site: context.site!,
    items: posts.map((post) => {
      const { title, description, publishedAt, tags } = post.data;

      return {
        title: title,
        description: description,
        pubDate: publishedAt,
        link: getPostFullPath(post),
        categories: tags,
        author: PROFILE.email,
      };
    }),
  });
}
