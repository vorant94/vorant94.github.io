import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import { h } from 'hastscript';
import * as mdast from 'mdast-util-to-string';
import readingTime from 'reading-time';
import rehypeAddClasses from 'rehype-add-classes';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeSlug from 'rehype-slug';
import { PROFILE } from './src/shared';

function readingTimePlugin() {
  return function (tree, { data }) {
    data.astro.frontmatter.minutesRead = readingTime(mdast.toString(tree)).text;
  };
}

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap(), react()],
  site: PROFILE.baseUrl,
  trailingSlash: 'never',
  markdown: {
    remarkPlugins: [readingTimePlugin],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAddClasses,
        {
          'h1,h2,h3,h4,h5,h6': 'group',
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'append',
          content: () => {
            return h('span.ml-2.invisible.text-sm.group-hover:visible', '🔗');
          },
          properties: {
            className: 'no-underline',
          },
        },
      ],
      [
        rehypeExternalLinks,
        {
          target: '_blank',
        },
      ],
    ],
    shikiConfig: {
      experimentalThemes: {
        light: 'github-light',
        dark: 'github-dark',
      },
    },
  },
});
