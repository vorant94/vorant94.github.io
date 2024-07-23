import { z } from "zod";

export const envSchema = z.object({
	NODE_ENV: z.enum(["development", "production"]).default("development"),
	CI: z.coerce.boolean().default(false),
	PORT: z.coerce.number().default(3000),
	BASE_URL: z.string().default("http://localhost:3000"),
});
export type EnvModel = z.infer<typeof envSchema>;
