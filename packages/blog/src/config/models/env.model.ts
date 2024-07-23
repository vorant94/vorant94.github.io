import { z } from "zod";

export const envSchema = z.object({
	// biome-ignore lint/style/useNamingConvention: env variables have different convention
	NODE_ENV: z.enum(["development", "production"]).default("development"),
	// biome-ignore lint/style/useNamingConvention: env variables have different convention
	CI: z.coerce.boolean().default(false),
	// biome-ignore lint/style/useNamingConvention: env variables have different convention
	PORT: z.coerce.number().default(3000),
	// biome-ignore lint/style/useNamingConvention: env variables have different convention
	BASE_URL: z.string().default("http://localhost:3000"),
});
export type EnvModel = z.infer<typeof envSchema>;
