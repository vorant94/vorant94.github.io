import dotenv from 'dotenv';
import { z } from 'zod';

const commonSchema = z.object({
  OUTPUT_DIR: z.string().default('.output'),
});
const ciSchema = commonSchema.extend({
  CI: z.coerce.boolean().pipe(z.literal(true)),
});
const localSchema = commonSchema.extend({
  CI: z.void(),
});

export const env = z
  .union([ciSchema, localSchema])
  .parse(dotenv.config().parsed);
