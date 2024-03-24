<script setup lang="ts">
defineProps<{ title: string }>();
</script>

<template>
  <div class="flex flex-col">
    <Divider :isLeft="false">
      <AppTitle base="h3">{{ title }}</AppTitle>
    </Divider>

    <div class="flex flex-col gap-4">
      <slot />
    </div>
  </div>
</template>
