<script setup lang="ts">
defineProps<{ href: string }>();
</script>

<template>
  <div
    class="flex h-24 items-center justify-center rounded-md duration-100 border border-transparent group cursor-pointer hover:border-slate-300 hover:dark:border-slate-600 hover:shadow-md hover:scale-105">
    <AppLink
      :href="href"
      class="flex items-center p-3">
      <slot />
    </AppLink>
  </div>
</template>
