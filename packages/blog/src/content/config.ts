import { postWithCover, postWithoutCover } from '@/shared/post.helpers.ts';
import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: (ctx) => z.union([postWithCover(ctx), postWithoutCover]),
});

export const collections = { posts };
