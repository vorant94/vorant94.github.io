<script setup lang="ts">
defineProps<{
  src: string; // to make it required
  srcDark?: string;
}>();
</script>

<template>
  <picture>
    <source
      v-if="srcDark"
      :srcset="srcDark"
      media="(prefers-color-scheme:dark)" />
    <img
      :src="src"
      v-bind="$attrs" />
  </picture>
</template>
