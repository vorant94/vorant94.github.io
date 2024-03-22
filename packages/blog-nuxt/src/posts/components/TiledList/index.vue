<script setup lang="ts">
defineProps<{ title: string }>();
</script>

<template>
  <div class="flex flex-col">
    <Divider>
      <AppTitle base="h3">{{ title }}</AppTitle>
    </Divider>

    <ul class="flex flex-col gap-2">
      <slot />
    </ul>
  </div>
</template>
