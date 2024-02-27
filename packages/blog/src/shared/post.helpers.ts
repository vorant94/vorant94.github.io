import {
  reference,
  type CollectionEntry,
  type SchemaContext,
} from 'astro:content';
import { format } from 'date-fns';
import { groupBy } from 'lodash-es';
import { z } from 'zod';
import { PublishedAtFormat } from './collection.helpers';

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

export function getPostFullPath({ slug }: Post): string {
  return `/posts/${slug}`;
}

export function getPostTagFullPath(tag: string): string {
  return `/tags/${tag}`;
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
