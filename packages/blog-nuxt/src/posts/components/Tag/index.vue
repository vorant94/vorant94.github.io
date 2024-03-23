<script setup lang="ts">
import { tagToColor } from './index.meta';

const props = defineProps<{ tag: string }>();

const href = computed(() => `/tags/${props.tag}`);
</script>

<template>
  <NuxtLink :href="href">
    <Badge
      class="!inline-block max-w-24 sm:max-w-none lg:max-w-24 xl:max-w-none truncate"
      :color="tagToColor(tag)">
      #{{ tag }}
    </Badge>
  </NuxtLink>
</template>
