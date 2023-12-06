/** @type {import("prettier").Config} */
export default {
  singleQuote: true,
  bracketSameLine: true,
  singleAttributePerLine: true,
  plugins: [
    'prettier-plugin-tailwindcss',
    'prettier-plugin-astro',
    'prettier-plugin-organize-imports',
  ],
  tailwindConfig: './tailwind.config.ts',
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
