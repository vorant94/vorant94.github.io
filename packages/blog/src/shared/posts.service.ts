import { type CollectionEntry } from 'astro:content';
import { compareDesc, format } from 'date-fns';
import { groupBy } from 'lodash-es';

export type Post = CollectionEntry<'posts'>;

export class PostsService {
  static publishedAtFormatFull = 'MMM dd, yyyy';
  static publishedAtFormatShort = 'MMM dd';
  static publishedAtFormatYear = 'yyyy';

  static getFullPath({ slug }: Post): string {
    return `posts/${slug}`;
  }

  static formatPublishedAt(
    { data }: Post,
    formatStr = PostsService.publishedAtFormatFull,
  ): string {
    return format(data.publishedAt, formatStr);
  }

  static sortByPublishedAt(posts: Post[]): Post[] {
    return posts.sort((a, b) =>
      compareDesc(a.data.publishedAt, b.data.publishedAt),
    );
  }

  static groupByPublishedAtYear(posts: Post[]): Record<string, Post[]> {
    return groupBy(posts, ({ data }) =>
      format(data.publishedAt, PostsService.publishedAtFormatYear),
    );
  }
}
