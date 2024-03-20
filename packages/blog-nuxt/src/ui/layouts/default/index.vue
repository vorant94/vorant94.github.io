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
});
</script>

<template>
  <div
    class="fixed h-[134px] w-[134px] lg:w-[300px] lg:h-[300px] rounded-full blur-[150px] md:blur-[350px] opacity-50 bg-cyan-500 left-0 top-0"></div>
  <div
    class="fixed h-[134px] w-[134px] lg:w-[300px] lg:h-[300px] rounded-full blur-[150px] md:blur-[350px] opacity-50 bg-lime-500 right-0 bottom-0"></div>

  <Header>
    <Nav />
  </Header>

  <main class="flex flex-1 flex-col gap-2 px-4 py-8">
    <slot />
  </main>

  <footer
    class="flex gap-1 items-center p-4 border-t border-slate-300 dark:border-slate-600 text-slate-500">
    <!-- TODO replace with Text -->
    <span class="text-sm">Mordechai Dror © 2023-present</span>

    <div class="flex-1"></div>

    <ButtonLink
      href="/rss.xml"
      aria-label="RSS feed"
      target="_blank">
      <Icon glyph="rss" />
    </ButtonLink>
  </footer>
</template>
