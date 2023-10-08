import { type CollectionEntry, getEntry } from 'astro:content';
import { compareDesc, format } from 'date-fns';

export class Post {
  private static pathPrefix = 'posts';
  private static dateFormat = 'MMM dd, yyyy';

  private constructor(
    public readonly slug: string,
    public readonly title: string,
    public readonly description: string,
    public readonly publishedAt: string,
  ) {}

  get fullPath() {
    return `${Post.pathPrefix}/${this.slug}`;
  }

  static async fromEntry(entry: CollectionEntry<'posts'>): Promise<Post> {
    let slug: string = entry.slug;
    let { title, description } = entry.data;
    const publishedAt = format(entry.data.publishedAt, Post.dateFormat);

    if (entry.data.thread) {
      const thread = await getEntry(entry.data.thread);

      slug = `${thread.slug}-${slug}`;
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
}
