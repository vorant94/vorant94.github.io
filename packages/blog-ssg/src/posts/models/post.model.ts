import { z } from 'zod';

const base = z.object({
  title: z.string(),
  description: z.string(),
  tags: z.array(z.string()),
  publishedAt: z.coerce.date(),
  related: z.array(z.string()).nullish(),
  isPinned: z.boolean().nullish().default(false),
  code: z.string().url().nullish(),
});
const withCover = base.extend({
  coverImage: z.string(),
  coverImageAlt: z.string(),
  coverImageDark: z.string().nullish(),
});
const withoutCover = base.extend({
  coverImage: z.void(),
});
export const postSchema = z.object({
  slug: z.string(),
  matter: z.union([withCover, withoutCover]),
});

export type PostModel = z.infer<typeof postSchema>;
