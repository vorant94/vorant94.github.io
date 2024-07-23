import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import postcssNested from "postcss-nested";
import tailwindcss from "tailwindcss";
import tailwindcssNesting from "tailwindcss/nesting";

/** @type {import('postcss-load-config').Config} */
export default {
	plugins: [
		tailwindcss,
		autoprefixer,
		cssnano,
		tailwindcssNesting(postcssNested),
	],
};
