import { type CollectionEntry, getEntry } from 'astro:content';
import { format } from 'date-fns';

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

  static async fromEntry(post: CollectionEntry<'posts'>): Promise<Post> {
    let slug: string = post.slug;
    let { title, description } = post.data;
    const publishedAt = format(post.data.publishedAt, Post.dateFormat);

    if (post.data.thread) {
      const thread = await getEntry(post.data.thread);

      slug = `${thread.slug}-${slug}`;
      title = `[${thread.data.title}]: ${title}`;
      description = thread.data.description;
    }

    if (!description) {
      throw new Error(
        `No description were generated for post with id ${post.id}`,
      );
    }

    return new Post(slug, title, description, publishedAt);
  }
}
