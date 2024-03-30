import process from 'node:process';
import { z } from 'zod';

const base = z.object({
  NODE_ENV: z.enum(['development', 'production']).default('development'),
});
const ci = base.extend({
  CI: z.coerce.boolean().pipe(z.literal(true)),
});
const local = base.extend({
  CI: z.void(),
  PORT: z.coerce.number().default(3000),
});
const envSchema = z.union([ci, local]);

export const env = envSchema.parse(process.env);

export function isCiEnv(
  env: z.infer<typeof envSchema>,
): env is z.infer<typeof ci> {
  return 'CI' in env;
}

export function isDevEnv(): boolean {
  return env.NODE_ENV === 'development';
}
