import typography from '@tailwindcss/typography';
import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx}'],
  plugins: [
    typography,
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
