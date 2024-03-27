import dotenv from 'dotenv';
import { z } from 'zod';

const common = z.object({
  OUTPUT_DIR: z.string().default('.output'),
  NODE_ENV: z.enum(['development', 'production']).default('development'),
});
const ci = common.extend({
  CI: z.coerce.boolean().pipe(z.literal(true)),
});
const local = common.extend({
  CI: z.void(),
  PORT: z.coerce.number().default(3000),
});
const united = z.union([ci, local]);

export const env = united.parse(dotenv.config().parsed);

export function isCiEnv(
  env: z.infer<typeof united>,
): env is z.infer<typeof ci> {
  return 'CI' in env;
}

export function isDevEnv(): boolean {
  return env.NODE_ENV === 'development';
}
