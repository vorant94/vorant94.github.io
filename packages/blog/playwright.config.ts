import process from "node:process";
import { defineConfig, devices } from "@playwright/test";
import { z } from "zod";

export const env = z
	.object({
		// biome-ignore lint/style/useNamingConvention: env variables have different convention
		NODE_ENV: z.enum(["development", "production"]).default("development"),
		// biome-ignore lint/style/useNamingConvention: env variables have different convention
		CI: z.coerce.boolean().default(false),
	})
	.parse(process.env);

export default defineConfig({
	testDir: "./e2e",
	fullyParallel: true,
	forbidOnly: env.CI,
	retries: env.CI ? 2 : 0,
	workers: env.CI ? 1 : undefined,
	reporter: "html",
	use: {
		// biome-ignore lint/style/useNamingConvention: 3-rd party type
		baseURL:
			env.NODE_ENV === "production"
				? "https://digital-garden.pages.dev"
				: "http://localhost:4321",
		trace: "on-first-retry",
		...devices["Desktop Chrome"],
	},
	webServer:
		env.NODE_ENV === "production"
			? undefined
			: {
					command: "npm run start:dev",
					url: "http://localhost:4321",
					reuseExistingServer: !env.CI,
				},
});
