<template>
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
