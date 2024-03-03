import type { Changelog } from '@/shared/changelog.helpers';
import type {
  ProjectData,
  ProjectWithCoverData,
} from '@/shared/project.helpers';
import { compareDesc, format } from 'date-fns';
import type { Post, PostData, PostWithCoverData } from './post.helpers';

export function isEntryDataWithCover(
  data: ProjectData,
): data is ProjectWithCoverData;
export function isEntryDataWithCover(data: PostData): data is PostWithCoverData;
export function isEntryDataWithCover(data: PostData | ProjectData): boolean {
  return 'coverImage' in data;
}

export enum PublishedAtFormat {
  FULL = 'MMM dd, yyyy',
  SHORT = 'MMM dd',
  YEAR = 'yyyy',
  SLUGIFY = 'MM-dd-yyyy',
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
