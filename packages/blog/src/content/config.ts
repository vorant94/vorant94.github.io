import { defineCollection, reference, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: ({ image }) => {
    return z.object({
      title: z.string(),
      description: z.string(),
      tags: z.array(z.string()),
      publishedAt: z.date(),
      coverImage: image().optional().nullable(),
      coverImageDark: image().optional().nullable(),
      related: z.array(reference('posts')).optional().nullable(),
      isPinned: z.boolean().optional().nullable().default(false),
      code: z.string().url().optional().nullable(),
    });
  },
});

export const collections = { posts };
