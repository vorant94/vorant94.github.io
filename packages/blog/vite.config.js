import path from "node:path";
import process from "node:process";
import { defineConfig } from "vite";
import postcss from "./postcss.config.js";

export default defineConfig({
	publicDir: false,
	css: { postcss },
	build: {
		outDir: path.resolve(process.cwd(), "public/client"),
		lib: {
			entry: path.resolve(process.cwd(), "src/client.ts"),
			fileName: "main",
			formats: ["es"],
		},
	},
});
