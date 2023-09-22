import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type {APIContext} from "astro";

export async function GET(context: APIContext) {
  const blog = await getCollection('posts');

  return rss({
    title: 'vorant94’s Blog',
    description: 'A personal space of yet another full-stack dev',
    site: context.site!,
    items: blog.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishedAt,
      link: `/posts/${post.slug}/`,
      categories: post.data.tags
    })),
  });
}
