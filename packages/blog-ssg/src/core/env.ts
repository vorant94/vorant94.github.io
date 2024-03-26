import dotenv from 'dotenv';
import { z } from 'zod';

const common = z.object({
  OUTPUT_DIR: z.string().default('.output'),
});
const ci = common.extend({
  CI: z.coerce.boolean().pipe(z.literal(true)),
});
const local = common.extend({
  CI: z.void(),
  PORT: z.coerce.number().default(3000),
});

export const env = z.union([ci, local]).parse(dotenv.config().parsed);
