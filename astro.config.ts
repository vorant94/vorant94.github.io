import type { AstroUserConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import readingTime from 'reading-time';
import { toString } from 'mdast-util-to-string';
import type { MarkdownContent } from 'astro';

function readingTimePlugin() {
  return function (tree: Node, { data }: MarkdownContent) {
    data.astro.frontmatter.minutesRead = readingTime(toString(tree)).text;
  };
}

export default {
  integrations: [tailwind()],
  site: 'https://vorant94.io',
  markdown: {
    remarkPlugins: [readingTimePlugin],
  },
} satisfies AstroUserConfig;
