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
      related: z.array(reference('posts')).nullable(),
      isPinned: z.boolean().nullable().default(false),
    });
  },
});

export const collections = { posts };
