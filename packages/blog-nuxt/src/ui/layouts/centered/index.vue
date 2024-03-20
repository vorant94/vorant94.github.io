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
  title: `vorant94's Digital Garden`,
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
  <div
    class="fixed h-[134px] w-[134px] lg:w-[300px] lg:h-[300px] rounded-full blur-[150px] md:blur-[350px] opacity-50 bg-cyan-500 left-0 top-0"></div>
  <div
    class="fixed h-[134px] w-[134px] lg:w-[300px] lg:h-[300px] rounded-full blur-[150px] md:blur-[350px] opacity-50 bg-lime-500 right-0 bottom-0"></div>

  <main class="flex flex-1 flex-col items-center justify-center">
    <slot />
  </main>
</template>
