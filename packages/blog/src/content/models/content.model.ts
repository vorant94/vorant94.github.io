import { z } from 'zod';

export const contentSchema = z.object({
  id: z.string(),
  path: z.string(),
  readingTime: z.object({
    text: z.string(),
    minutes: z.number(),
    time: z.number(),
    words: z.number(),
  }),
});

export type ContentModel = z.infer<typeof contentSchema>;

export enum PublishedAtFormat {
  FULL = 'MMM dd, yyyy',
  SHORT = 'MMM dd',
  YEAR = 'yyyy',
}
