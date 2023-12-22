import { type CollectionEntry } from 'astro:content';
import { compareDesc, format } from 'date-fns';
import { groupBy } from 'lodash-es';

export class PostsService {
  static dateFormatFull = 'MMM dd, yyyy';
  static dateFormatShort = 'MMM dd';

  static getFullPath(entry: CollectionEntry<'posts'>): string {
    return `posts/${entry.slug}`;
  }

  static formatPublishedAt(
    entry: CollectionEntry<'posts'>,
    formatStr = PostsService.dateFormatFull,
  ): string {
    return format(entry.data.publishedAt, formatStr);
  }

  static sortEntries(
    entries: CollectionEntry<'posts'>[],
  ): CollectionEntry<'posts'>[] {
    return entries.sort((a, b) =>
      compareDesc(a.data.publishedAt, b.data.publishedAt),
    );
  }

  static groupEntriesByYear(
    entries: CollectionEntry<'posts'>[],
  ): Record<string, CollectionEntry<'posts'>[]> {
    return groupBy(entries, ({ data }) => format(data.publishedAt, 'yyyy'));
  }
}
