<script setup lang="ts">
import type { TailwindColor } from '~/ui/utils/tailwind';
import { badgeColorToBg } from './index.meta';

defineProps<{ color: TailwindColor }>();
</script>

<template>
  <span
    class="text-slate-800 dark:text-slate-100 inline-flex items-center rounded-full text-xs px-2.5 py-0.5 font-semibold"
    :class="badgeColorToBg[color]">
    <slot />
  </span>
</template>
