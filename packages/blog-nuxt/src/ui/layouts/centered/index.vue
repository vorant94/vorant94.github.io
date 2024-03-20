<script setup lang="ts">
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
</script>

<template>
  <Background />

  <main class="flex flex-1 flex-col items-center justify-center">
    <slot />
  </main>
</template>
