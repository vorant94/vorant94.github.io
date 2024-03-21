<script setup lang="ts">
import { defaultLayoutPortal } from '~/ui/layouts/default/index.meta';

useHead({
  htmlAttrs: {
    class: 'dark:[color-scheme:dark]',
    lang: 'en',
  },
  bodyAttrs: {
    class:
      'bg-slate-50 dark:bg-slate-900 mx-auto sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl flex min-h-dvh flex-col items-stretch',
  },
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: '/favicon-dark.ico',
      media: '(prefers-color-scheme: dark)',
    },
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: '/favicon.ico',
      media: '(prefers-color-scheme: light)',
    },
  ],
});

const portalRef = ref(null);
provide(defaultLayoutPortal, portalRef);
</script>

<template>
  <Background />

  <Header>
    <Nav />
  </Header>

  <main class="flex flex-1 flex-col gap-2 px-4 py-8">
    <slot />
  </main>

  <Footer />

  <div ref="portalRef"></div>
</template>
