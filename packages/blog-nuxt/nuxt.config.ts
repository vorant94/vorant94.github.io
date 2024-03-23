import process from 'node:process';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: './src',
  serverDir: './server',
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@vueuse/motion/nuxt',
    '@nuxt/test-utils/module',
    // need it to store assets right aside of md files instead of public folder
    //  https://github.com/nuxt/content/issues/106
    'nuxt-content-assets', // make sure to add before content!
    '@nuxt/content',
  ],
  extends: ['./src/ui', './src/home', './src/projects', './src/posts'],
  devtools: { enabled: true },
  // TODO this works as a workaround since it seems that Nuxt Content doesn't support Nuxt Layers
  //  probably a good idea for PR
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
        // need to allow usage of lottie custom web element player,
        //  since its vue adapter doesn't have typescript and
        //  seems way more outdated than react one web elements one
        compilerOptions: {
          isCustomElement: (tag) => tag.includes('-'),
        },
      },
    },
  },
  hooks: {
    close: () => {
      // https://github.com/nuxt/cli/issues/169#issuecomment-1729300497
      //  workaround for https://github.com/nuxt/cli/issues/169
      process.exit(0);
    },
  },
});
