<script setup lang="ts">
import {
  type AppTitleBase,
  appTitleBaseToStyles,
} from '~/ui/components/AppTitle/index.meta';

defineProps<{ base: AppTitleBase }>();
</script>

<template>
  <Component
    :is="base"
    class="text-slate-800 dark:text-slate-100"
    :class="appTitleBaseToStyles[base]">
    <slot />
  </Component>
</template>
