import { defineCollection, reference, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema({ image }) {
    return z
      .object({
        title: z.string(),
        description: z.string(),
        tags: z.array(z.string()),
        publishedAt: z.date(),
        coverImage: image().nullish(),
        coverImageAlt: z.string().nullish(),
        coverImageDark: image().nullish(),
        related: z.array(reference('posts')).nullish(),
        isPinned: z.boolean().nullish().default(false),
        code: z.string().url().nullish(),
      })
      .refine(
        (value) =>
          !value.coverImage || (!!value.coverImage && !!value.coverImageAlt),
        'Cover Image should have Alt text',
      );
  },
});

const projects = defineCollection({
  type: 'content',
  schema({ image }) {
    return z
      .object({
        name: z.string(),
        slogan: z.string(),
        status: z.enum(['concept', 'mvp', 'live', 'freezed', 'closed']),
        coverImage: image().optional().nullable(),
        coverImageAlt: z.string().optional().nullable(),
        coverImageDark: image().optional().nullable(),
        code: z.string().url(),
      })
      .refine(
        (value) =>
          !value.coverImage || (!!value.coverImage && !!value.coverImageAlt),
        'Cover Image should have Alt text',
      );
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
