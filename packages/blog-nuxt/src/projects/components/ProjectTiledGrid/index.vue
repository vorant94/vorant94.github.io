<script setup lang="ts">
defineProps<{ title: string }>();
</script>

<template>
  <div class="flex flex-col">
    <Divider>
      <AppTitle base="h3">{{ title }}</AppTitle>
    </Divider>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
      <slot />
    </div>
  </div>
</template>
