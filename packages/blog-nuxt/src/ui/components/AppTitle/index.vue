<script setup lang="ts">
import {
  type AppTitleBase,
  appTitleBaseToStyles,
} from '~/ui/components/AppTitle/models';

defineProps<{ base: AppTitleBase }>();
</script>

<template>
  <component
    :is="base"
    class="text-slate-800 dark:text-slate-100"
    :class="appTitleBaseToStyles[base]">
    <slot />
  </component>
</template>
