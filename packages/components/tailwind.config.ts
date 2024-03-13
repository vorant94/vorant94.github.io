import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [],
  prefix: 'dg-',
} satisfies Config;
