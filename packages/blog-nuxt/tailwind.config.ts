import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [
    typography(),
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
} satisfies Config;
