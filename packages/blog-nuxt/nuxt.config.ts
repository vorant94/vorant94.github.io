// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: './src',
  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt', '@vueuse/motion/nuxt'],
  extends: ['./src/ui', './src/home', './src/projects', './src/posts'],
  devtools: { enabled: true },
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
});
