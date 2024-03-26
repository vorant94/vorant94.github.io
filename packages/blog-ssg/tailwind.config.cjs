const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    plugin(function ({ addVariant }) {
      addVariant('hover', [
        '@media (hover: hover) { &:hover }',
        '@media (hover: none) { &:active }',
      ]);
      addVariant('group-hover', [
        '@media (hover: hover) { .group:hover & }',
        '@media (hover: none) { .group:active & }',
      ]);
    }),
  ],
};
