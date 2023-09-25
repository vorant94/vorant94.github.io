import { z, defineCollection } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      tags: z.array(z.string()),
      platforms: z.array(z.string()),
      publishedAt: z.date(),
      coverImage: image().nullable(),
    }),
});

export const collections = { posts };
