import process from 'node:process';
import { z } from 'zod';

const ciSchema = z.object({
  CI: z.coerce.boolean().pipe(z.literal(true)),
});
const localSchema = z.object({
  CI: z.void(),
});

export const env = z.union([ciSchema, localSchema]).parse(process.env);
