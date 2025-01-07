import react from "@vitejs/plugin-react";
import postcssNested from "postcss-nested";
import tailwindcss from "tailwindcss";
import tailwindcssNesting from "tailwindcss/nesting";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [react()],
	css: {
		postcss: {
			plugins: [tailwindcss, tailwindcssNesting(postcssNested)],
		},
	},
});
