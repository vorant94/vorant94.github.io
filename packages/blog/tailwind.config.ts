import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

export default {
  content: [
    './astro.config.mjs',
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  plugins: [
    typography(),
    plugin(function ({ addVariant }) {
      addVariant('hover', [
        '@media (hover: hover) { &:hover }',
        '@media (hover: none) { &:active }',
      ]);
    }),
  ],
} satisfies Config;
