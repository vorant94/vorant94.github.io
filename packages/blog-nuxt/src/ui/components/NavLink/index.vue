<script setup lang="ts">
import type { NavLinkItem } from '~/ui/components/NavLink/models';

defineProps<{ item: NavLinkItem }>();
</script>
<template>
  <li>
    <AppLink
      :href="item.url"
      class="font-semibold block text-center text-2xl p-3 md:p-4 rounded-full border-2 bg-slate-50 dark:bg-slate-900 border-slate-300 dark:border-slate-600 lg:text-sm lg:p-0 lg:bg-none dark:lg:bg-none lg:rounded-none lg:border-none">
      {{ item.label }}
    </AppLink>
  </li>
</template>

<style scoped>
.router-link-active {
  @apply underline text-cyan-500;
}
</style>
