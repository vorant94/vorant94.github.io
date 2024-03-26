import dotenv from 'dotenv';
import { z } from 'zod';

const ciSchema = z.object({
  CI: z.coerce.boolean().pipe(z.literal(true)),
});
const localSchema = z.object({
  CI: z.void(),
});

export const env = z
  .union([ciSchema, localSchema])
  .parse(dotenv.config().parsed);
