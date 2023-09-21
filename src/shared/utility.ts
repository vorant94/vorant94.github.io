import type { CollectionEntry } from 'astro:content';

export function getPostTitle(post: CollectionEntry<'posts'>): string {
  return post.id.split('.')[0];
}
