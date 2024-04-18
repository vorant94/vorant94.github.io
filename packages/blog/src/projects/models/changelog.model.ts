import { z } from 'zod';
import { contentSchema } from '../../content/index.js';

export const changelogSchema = contentSchema.extend({
  matter: z.object({
    publishedAt: z.coerce.date(),
    version: z.string().transform(function (value) {
      return `v${value}`;
    }),
  }),
});

export type ChangelogModel = z.infer<typeof changelogSchema>;
