import { type CollectionEntry, getEntry } from 'astro:content';
import { compareDesc, format } from 'date-fns';
import slugify from 'slugify';
import { groupBy } from 'lodash';

export class Post {
  static dateFormatFull = 'MMM dd, yyyy';
  static dateFormatShort = 'MMM dd';

  private static pathPrefix = 'posts';
  private static slugifyOptions: Parameters<typeof slugify>[1] = {
    lower: true,
    remove: /['?]/g,
  };

  private constructor(
    public readonly slug: string,
    public readonly title: string,
    public readonly description: string,
    public readonly publishedAt: string,
  ) {}

  get fullPath() {
    return `${Post.pathPrefix}/${this.slug}`;
  }

  static async fromEntry(
    entry: CollectionEntry<'posts'>,
    dateFormat = Post.dateFormatFull,
  ): Promise<Post> {
    let slug: string = entry.slug;
    let { title, description } = entry.data;
    const publishedAt = format(entry.data.publishedAt, dateFormat);

    if (entry.data.thread) {
      const thread = await getEntry(entry.data.thread);

      slug = slugify(`${thread.data.title}-${slug}`, Post.slugifyOptions);
      title = `[${thread.data.title}]: ${title}`;
      description = thread.data.description;
    }

    if (!description) {
      throw new Error(
        `No description were generated for post with id ${entry.id}`,
      );
    }

    return new Post(slug, title, description, publishedAt);
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
