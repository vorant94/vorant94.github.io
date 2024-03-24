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
    // make sure to add before content!
    'nuxt-content-assets',
    '@nuxt/content',
  ],
  extends: ['./src/ui', './src/home', './src/projects', './src/posts'],
  devtools: { enabled: true },
  // TODO this works as a workaround since it seems that Nuxt Content doesn't support Nuxt Layers
  //  probably a good idea for PR
  content: {
    markdown: {
      remarkPlugins: ['remark-reading-time'],
    },
    sources: {
      posts: {
        driver: 'fs',
        base: new URL('./src/posts/content', import.meta.url).pathname,
      },
      projects: {
        driver: 'fs',
        base: new URL('./src/projects/content', import.meta.url).pathname,
      },
    },
    highlight: {
      langs: [
        'json',
        'html',
        'yaml',
        'sass',
        'javascript',
        'typescript',
        'dart',
        'dockerfile',
        'json5',
      ],
      theme: {
        default: 'github-light-default',
        dark: 'github-dark-default',
      },
    },
  },
  // TODO create issue for Nuxt Content that in dev mode
  //  start app, go to content-based route - it has no trailing slash
  //  refresh the page while you are in this nested route - trailing slash appears
  experimental: {
    defaults: {
      nuxtLink: {
        trailingSlash: 'remove',
      },
    },
  },
  postcss: {
    plugins: {
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {},
      cssnano: {},
    },
  },
  vite: {
    vue: {
      template: {
        // need to allow usage of lottie custom web element player,
        //  since its vue adapter doesn't have typescript and
        //  seems way more outdated than react one web elements one
        compilerOptions: {
          isCustomElement: (tag: string) => tag.includes('-'),
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
