import type { AstroUserConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default {
  integrations: [tailwind()],
  site: 'https://vorant94.io'
} satisfies AstroUserConfig;
