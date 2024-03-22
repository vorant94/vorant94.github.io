<script setup lang="ts">
defineProps<{ title: string }>();
</script>

<template>
  <div class="flex flex-col">
    <Divider :isLeft="false">
      <AppTitle base="h3">{{ title }}</AppTitle>
    </Divider>
    <ul
      class="flex flex-col divide-y divide-dashed border-slate-300 dark:border-slate-600">
      <slot />
    </ul>
  </div>
</template>
