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
        coverImage: image().optional().nullable(),
        coverImageAlt: z.string().optional().nullable(),
        coverImageDark: image().optional().nullable(),
        related: z.array(reference('posts')).optional().nullable(),
        isPinned: z.boolean().optional().nullable().default(false),
        code: z.string().url().optional().nullable(),
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
        title: z.string(),
        description: z.string(),
        status: z.enum([
          'planing',
          'in progress',
          'in production',
          'freezed',
          'closed',
        ]),
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
      project: reference('project'),
    });
  },
});

export const collections = { posts, projects, changelogs };
