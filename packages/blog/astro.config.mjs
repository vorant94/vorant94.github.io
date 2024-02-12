import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import { config } from 'dotenv';
import { h } from 'hastscript';
import { toString } from 'mdast-util-to-string';
import process from 'node:process';
import readingTime from 'reading-time';
import rehypeAddClasses from 'rehype-add-classes';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeSlug from 'rehype-slug';
import { z } from 'zod';

config();

const ciSchema = z.object({
  BASE_URL: z.string().url(),
  CI: z.coerce.boolean().pipe(z.literal(true)),
});
const localSchema = z.object({
  BASE_URL: z.string().url().nullish().default('http://localhost:4321'),
  CI: z.void(),
});

const env = z.union([ciSchema, localSchema]).parse(process.env);

function readingTimePlugin() {
  return function (tree, { data }) {
    data.astro.frontmatter.minutesRead = readingTime(toString(tree)).text;
  };
}

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    // because of this sitemap plugin not working in SSR mode the output cannot be server
    sitemap(),
    react(),
  ],
  site: env.BASE_URL,
  trailingSlash: 'never',
  // this adds to bundle an Astro script to manipulate head element to enable prefetch dynamically,
  // hence despite being in SSG mode astro should be moved from devDependencies to dependencies
  prefetch: true,
  vite: {
    resolve: {
      alias: {
        '@/': new URL('./src/', import.meta.url).pathname,
      },
    },
  },
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
          content() {
            return h('span.ml-2.invisible.text-sm.group-hover:visible', '🔗');
          },
          properties({ children }) {
            const text = children.find((child) => child.type === 'text');
            return {
              className: 'no-underline',
              ariaLabel: text.value,
            };
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
      transformers: [
        {
          pre({ properties, ...other }) {
            const { tabindex: _, ...updatedProperties } = properties;
            return { properties: updatedProperties, ...other };
          },
        },
      ],
    },
  },
});
