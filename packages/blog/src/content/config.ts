import { defineCollection, reference, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema({ image }) {
    const base = z.object({
      title: z.string(),
      description: z.string(),
      tags: z.array(z.string()),
      publishedAt: z.date(),
      related: z.array(reference('posts')).nullish(),
      isPinned: z.boolean().nullish().default(false),
      code: z.string().url().nullish(),
    });

    const withoutCover = base.extend({
      coverImage: z.void(),
    });

    const withCover = base.extend({
      coverImage: image(),
      coverImageAlt: z.string(),
      coverImageDark: image().nullish(),
    });

    return z.union([withCover, withoutCover]);
  },
});

const projects = defineCollection({
  type: 'content',
  schema({ image }) {
    const base = z.object({
      name: z.string(),
      slogan: z.string(),
      status: z.enum(['concept', 'mvp', 'live', 'freezed', 'closed']),
      code: z.string().url(),
    });

    const withoutCover = base.extend({
      coverImage: z.void(),
    });

    const withCover = base.extend({
      coverImage: image(),
      coverImageAlt: z.string(),
      coverImageDark: image().nullish(),
    });

    return z.union([withCover, withoutCover]);
  },
});

const changelogs = defineCollection({
  type: 'content',
  schema() {
    return z.object({
      publishedAt: z.date(),
      project: reference('projects'),
    });
  },
});

export const collections = { posts, projects, changelogs };
