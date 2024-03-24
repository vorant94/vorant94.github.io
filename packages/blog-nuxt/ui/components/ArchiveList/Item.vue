<script setup lang="ts">
defineProps<{ href: string }>();
</script>

<template>
  <li class="flex flex-col py-3 text-medium">
    <AppLink
      class="text-slate-800 dark:text-slate-100 flex gap-3 items-center"
      :href="href">
      <span class="flex-1 truncate">
        <slot name="left" />
      </span>
      <span class="whitespace-nowrap text-xs">
        <slot name="right" />
      </span>
    </AppLink>
  </li>
</template>
