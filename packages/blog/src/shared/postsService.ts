import { type CollectionEntry } from 'astro:content';
import dateFns from 'date-fns';
import _ from 'lodash';

export class PostsService {
  static dateFormatFull = 'MMM dd, yyyy';
  static dateFormatShort = 'MMM dd';

  static getFullPath(entry: CollectionEntry<'posts'>): string {
    return `posts/${entry.slug}`;
  }

  static formatPublishedAt(
    entry: CollectionEntry<'posts'>,
    format = PostsService.dateFormatFull,
  ): string {
    return dateFns.format(entry.data.publishedAt, format);
  }

  static sortEntries(
    entries: CollectionEntry<'posts'>[],
  ): CollectionEntry<'posts'>[] {
    return entries.sort((a, b) =>
      dateFns.compareDesc(a.data.publishedAt, b.data.publishedAt),
    );
  }

  static groupEntriesByYear(
    entries: CollectionEntry<'posts'>[],
  ): Record<string, CollectionEntry<'posts'>[]> {
    return _.groupBy(entries, ({ data }) =>
      dateFns.format(data.publishedAt, 'yyyy'),
    );
  }
}
