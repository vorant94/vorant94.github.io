import { z, defineCollection } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    tags: z.array(z.string()),
    publishedAt: z.date(),
  }),
});

export const collections = {
  'posts': postsCollection,
};
