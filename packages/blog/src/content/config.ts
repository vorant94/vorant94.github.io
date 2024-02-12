import { defineCollection, reference, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: ({ image }) => {
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

export const collections = { posts };
