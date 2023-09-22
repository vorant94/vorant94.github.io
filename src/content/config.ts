import { z, defineCollection } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    publishedAt: z.date(),
  }),
});

const attachments = defineCollection({
  type: 'content',
});

export const collections = { posts, attachments };
