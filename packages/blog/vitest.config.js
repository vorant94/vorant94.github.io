import { defineConfig } from "vitest/config";

export default defineConfig({
	css: { postcss: {} },
	test: {
		root: "./src",
		coverage: {
			reportsDirectory: "../coverage",
			reporter: ["text", "html"],
			exclude: [
				"**/*.d.ts",
				"**/*.spec.*",
				"**/*.mock.ts",
				"**/*.mock.tsx",
				"**/types/*",
				"**/globals/*",
				"**/models/*.model.ts",
				"**/models/*.model.tsx",
				"**/components/*.com.ts",
				"**/components/*.com.tsx",
				"**/utils/*.matchers.ts",
				"ui/utils/cn.ts", // a simple wrapper to unify two external libs
				"server.tsx", // main setup file
				"client.ts", // client js
			],
		},
	},
});
