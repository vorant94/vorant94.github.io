<script setup lang="ts">
import type { AppLinkLevel } from './index.meta.ts';

// for some reason just AppLink instead of AppLink is not recognised
defineProps<{ level?: AppLinkLevel }>();
</script>

<template>
  <NuxtLink
    class="text-slate-500 decoration-cyan-500 decoration-dotted decoration-4 underline-offset-4 hover:text-cyan-500 hover:underline group-hover:text-cyan-500 group-hover:underline"
    :class="{ 'text-sm font-light': level === 'sm' }">
    <slot />
  </NuxtLink>
</template>
