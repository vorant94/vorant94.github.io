import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './astro.config.mjs',
  ],
  plugins: [typography()],
} satisfies Config;
