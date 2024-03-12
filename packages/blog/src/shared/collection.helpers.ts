import type { Changelog } from '@/shared/changelog.helpers.ts';
import { compareDesc, format } from 'date-fns';
import type { Post, PostData, PostWithCoverData } from './post.helpers.ts';

export function isEntryDataWithCover(data: PostData): data is PostWithCoverData;
export function isEntryDataWithCover(data: PostData): boolean {
  return 'coverImage' in data;
}

export enum PublishedAtFormat {
  FULL = 'MMM dd, yyyy',
  SHORT = 'MMM dd',
  YEAR = 'yyyy',
}

export function formatEntryPublishedAt(
  publishedAt: Date,
  formatStr = PublishedAtFormat.FULL,
): string {
  return format(publishedAt, formatStr);
}

export function sortEntriesByPublishedAt(entries: Post[]): Post[];
export function sortEntriesByPublishedAt(entries: Changelog[]): Changelog[];
export function sortEntriesByPublishedAt(
  entries: Post[] | Changelog[],
): Post[] | Changelog[] {
  return entries.sort((a, b) =>
    compareDesc(a.data.publishedAt, b.data.publishedAt),
  );
}
