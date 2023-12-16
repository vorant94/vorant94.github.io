import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import { PostsService } from '../shared/posts.service';
import { PROFILE } from '../shared/profile';

export async function GET(context: APIContext) {
  const posts = PostsService.sortEntries(await getCollection('posts'));

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
        link: PostsService.getFullPath(post),
        categories: tags,
        author: PROFILE.email,
      };
    }),
  });
}
