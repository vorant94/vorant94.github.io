/**
 * @type {import("prettier").Config}
 */
export default {
  singleQuote: true,
  bracketSameLine: true,
  singleAttributePerLine: true,
  plugins: [
    'prettier-plugin-tailwindcss',
    'prettier-plugin-astro',
    'prettier-plugin-organize-imports',
    'prettier-plugin-astro-organize-imports',
    'prettier-plugin-css-order',
  ],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
