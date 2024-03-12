import { postWithCover, postWithoutCover } from '@/shared/post.helpers.ts';
import { projectStatuses } from '@/shared/project.helpers.ts';
import { defineCollection, reference, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: (ctx) => z.union([postWithCover(ctx), postWithoutCover]),
});

const projects = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      slogan: z.string(),
      status: z.enum(projectStatuses),
      isFeatured: z.boolean().default(false),
      sourceCodeUrl: z.string().url(),
      productionUrl: z.string().url().nullish(),
      logo: image(),
      logoDark: image().nullish(),
      demo: image(),
      demoDark: image().nullish(),
    }),
});

const changelogs = defineCollection({
  type: 'content',
  schema() {
    return z.object({
      publishedAt: z.date(),
      project: reference('projects'),
      version: z.string(),
    });
  },
});

export const collections = { posts, projects, changelogs };
