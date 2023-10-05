import { defineCollection, reference, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: ({ image }) => {
    return z
      .object({
        title: z.string(),
        description: z.string().optional(),
        tags: z.array(z.string()),
        platforms: z.array(z.string()),
        publishedAt: z.date(),
        coverImage: image().nullable(),
        thread: reference('threads').optional(),
      })
      .superRefine(({ thread, description }, context) => {
        if (!thread && !description) {
          return context.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'either "thread" or "description" should be defined',
          });
        }
      });
  },
});

const threads = defineCollection({
  type: 'content',
  schema: () => {
    return z.object({
      title: z.string(),
      description: z.string(),
    });
  },
});

export const collections = { posts, threads };
