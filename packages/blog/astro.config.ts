import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import type { MarkdownContent } from 'astro';
import type { AstroUserConfig } from 'astro/config';
import { toString } from 'mdast-util-to-string';
import readingTime from 'reading-time';

function readingTimePlugin() {
  return function (tree: Node, { data }: MarkdownContent) {
    data.astro.frontmatter.minutesRead = readingTime(toString(tree)).text;
  };
}

export default {
  integrations: [tailwind(), sitemap(), react()],
  site: 'https://vorant94.io',
  markdown: {
    remarkPlugins: [readingTimePlugin],
    shikiConfig: {
      theme: 'github-light',
    },
  },
} satisfies AstroUserConfig;
