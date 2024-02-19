import { postWithCover, postWithoutCover } from '@/shared/post.helpers.ts';
import {
  projectWithCover,
  projectWithoutCover,
} from '@/shared/project.helpers.ts';
import { defineCollection, reference, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: (ctx) => z.union([postWithCover(ctx), postWithoutCover]),
});

const projects = defineCollection({
  type: 'content',
  schema: (ctx) => z.union([projectWithCover(ctx), projectWithoutCover]),
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
