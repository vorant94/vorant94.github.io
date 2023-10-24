import { defineCollection, reference, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: ({ image }) => {
    return z
      .object({
        title: z.string(),
        description: z.string().optional(),
        tags: z.array(z.string()),
        platforms: z.array(z.string()).optional(),
        publishedAt: z.date(),
        coverImage: image().nullable(),
        thread: reference('threads').optional(),
        isPinned: z.boolean().optional().default(false),
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
  type: 'data',
  schema: () => {
    return z.object({
      title: z.string(),
      description: z.string(),
    });
  },
});

const links = defineCollection({
  type: 'data',
  schema: () => {
    return z.object({
      url: z.string(),
      label: z.string(),
      icon: z.string(),
      isHidden: z.boolean().optional(),
    });
  },
});

export const collections = { posts, threads, links };
