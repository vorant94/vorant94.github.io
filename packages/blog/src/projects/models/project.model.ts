import { z } from 'zod';
import { contentSchema } from '../../content/index.js';

export const projectStatuses = [
  'concept',
  'mvp',
  'live',
  'freezed',
  'closed',
] as const;
export type ProjectStatus = (typeof projectStatuses)[number];

export const projectSchema = contentSchema.extend({
  matter: z.object({
    name: z.string(),
    slogan: z.string(),
    status: z.enum(projectStatuses),
    version: z.string().transform(function (value) {
      return `v${value}`;
    }),
    isFeatured: z.boolean().default(false),
    sourceCodeUrl: z.string().url(),
    productionUrl: z.string().url().nullish(),
    logo: z.string(),
    logoDark: z.string().nullish(),
    demo: z.string(),
    demoDark: z.string().nullish(),
  }),
});

export type ProjectModel = z.infer<typeof projectSchema>;

export const projectStatusToLabel = {
  concept: 'Concept',
  mvp: 'MVP',
  live: 'Live',
  freezed: 'Freezed',
  closed: 'Closed',
} as const satisfies Record<ProjectStatus, string>;

export const projectStatusOrder = {
  live: 0,
  mvp: 1,
  concept: 2,
  freezed: 3,
  closed: 4,
} as const satisfies Record<ProjectStatus, number>;
