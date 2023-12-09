import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import * as mdast from 'mdast-util-to-string';
import readingTime from 'reading-time';
import { PROFILE } from './src/shared/profile.ts';

function readingTimePlugin() {
  return function (tree, { data }) {
    data.astro.frontmatter.minutesRead = readingTime(mdast.toString(tree)).text;
  };
}

/** @type {import("astro/config").AstroUserConfig} */
export default {
  integrations: [tailwind(), sitemap(), react()],
  site: PROFILE.baseUrl,
  markdown: {
    remarkPlugins: [readingTimePlugin],
    shikiConfig: {
      theme: 'github-light',
    },
  },
};
