import { compareDesc, format } from 'date-fns';
import type { Post, PostData, PostWithCoverData } from './post.helpers';

export function isEntryDataWithCover(
  data: PostData,
): data is PostWithCoverData {
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

export function sortEntriesByPublishedAt(entries: Post[]): Post[] {
  return entries.sort((a, b) =>
    compareDesc(a.data.publishedAt, b.data.publishedAt),
  );
}
