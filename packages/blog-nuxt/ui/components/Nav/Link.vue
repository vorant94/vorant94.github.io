<script setup lang="ts">
import type { NavLinkItem } from '~/ui/components/Nav/Link.meta';

defineProps<{ item: NavLinkItem }>();

const route = useRoute();
</script>
<template>
  <li>
    <AppLink
      :href="item.url"
      class="font-semibold block text-center text-2xl p-3 md:p-4 rounded-full border-2 bg-slate-50 dark:bg-slate-900 border-slate-300 dark:border-slate-600 lg:text-sm lg:p-0 lg:bg-none dark:lg:bg-none lg:rounded-none lg:border-none"
      :class="{
        // can't use router-link-active since routes /posts and /posts/:slug are considered parallel based on file structure, not nested
        // https://github.com/nuxt/nuxt/issues/20338
        'underline !text-cyan-500': route.path.startsWith(item.url),
      }">
      {{ item.label }}
    </AppLink>
  </li>
</template>
