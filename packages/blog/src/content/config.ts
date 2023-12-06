import { defineCollection, reference, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: ({ image }) => {
    return z.object({
      title: z.string(),
      description: z.string(),
      tags: z.array(z.string()),
      publishedAt: z.date(),
      coverImage: image().nullable(),
      related: z.array(reference('posts')).optional(),
      isPinned: z.boolean().optional().default(false),
    });
  },
});

export const collections = { posts };
