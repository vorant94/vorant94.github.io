import process from 'node:process';

// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  srcDir: './src',
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@vueuse/motion/nuxt',
    '@nuxt/test-utils/module',
    'nuxt-content-assets', // make sure to add before content!
    '@nuxt/content',
  ],
  extends: ['./src/ui', './src/home', './src/projects', './src/posts'],
  devtools: { enabled: true },
  content: {
    sources: {
      posts: {
        driver: 'fs',
        base: new URL('./src/posts/content', import.meta.url).pathname,
      },
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      cssnano: {},
      'tailwindcss/nesting': {},
    },
  },
  vite: {
    vue: {
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.includes('-'),
        },
      },
    },
  },
  hooks: {
    close: () => {
      // @see https://github.com/nuxt/cli/issues/169#issuecomment-1729300497
      // Workaround for https://github.com/nuxt/cli/issues/169
      process.exit(0);
    },
  },
});
