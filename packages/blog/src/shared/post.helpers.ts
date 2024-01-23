import type { CollectionEntry } from 'astro:content';
import { compareDesc, format } from 'date-fns';
import { groupBy } from 'lodash-es';

export type Post = CollectionEntry<'posts'>;

export enum PublishedAtFormat {
  FULL = 'MMM dd, yyyy',
  SHORT = 'MMM dd',
  YEAR = 'yyyy',
}

export function getPostFullPath({ slug }: Post): string {
  return `posts/${slug}`;
}

export function formatPostPublishedAt(
  { data }: Post,
  formatStr = PublishedAtFormat.FULL,
): string {
  return format(data.publishedAt, formatStr);
}

export function sortPostsByPublishedAt(posts: Post[]): Post[] {
  return posts.sort((a, b) =>
    compareDesc(a.data.publishedAt, b.data.publishedAt),
  );
}

export function groupPostsByPublishedAtYear(
  posts: Post[],
): Record<string, Post[]> {
  return groupBy(posts, ({ data }) =>
    format(data.publishedAt, PublishedAtFormat.YEAR),
  );
}
