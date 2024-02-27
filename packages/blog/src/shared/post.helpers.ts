import {
  reference,
  type CollectionEntry,
  type SchemaContext,
} from 'astro:content';
import { compareDesc, format } from 'date-fns';
import { groupBy } from 'lodash-es';
import { z } from 'zod';

export type Post = CollectionEntry<'posts'>;

const base = z.object({
  title: z.string(),
  description: z.string(),
  tags: z.array(z.string()),
  publishedAt: z.date(),
  related: z.array(reference('posts')).nullish(),
  isPinned: z.boolean().nullish().default(false),
  code: z.string().url().nullish(),
});

export const postWithoutCover = base.extend({
  coverImage: z.void(),
});

export const postWithCover = ({ image }: SchemaContext) =>
  base.extend({
    coverImage: image(),
    coverImageAlt: z.string(),
    coverImageDark: image().nullish(),
  });

export type PostWithoutCoverData = z.infer<typeof postWithoutCover>;
export type PostWithCoverData = z.infer<ReturnType<typeof postWithCover>>;
export type PostData = PostWithoutCoverData | PostWithCoverData;

export function isPostDataWithCover(data: PostData): data is PostWithCoverData {
  return 'coverImage' in data;
}

export enum PublishedAtFormat {
  FULL = 'MMM dd, yyyy',
  SHORT = 'MMM dd',
  YEAR = 'yyyy',
}

export function getPostFullPath({ slug }: Post): string {
  return `/posts/${slug}`;
}

export function getPostTagFullPath(tag: string): string {
  return `/tags/${tag}`;
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

export function getUniqPostTags(posts: Post[]): string[] {
  const raw = posts
    .map(({ data }) => data.tags)
    .reduce((acc, curr) => [...acc, ...curr], []);

  return [...new Set(raw)].toSorted();
}
