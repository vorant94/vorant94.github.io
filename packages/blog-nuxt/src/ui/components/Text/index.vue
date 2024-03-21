<script setup lang="ts">
import {
  type TextBase,
  textBaseToStyle,
} from '~/ui/components/Text/index.meta';

defineProps<{ base: TextBase }>();
</script>

<template>
  <Component
    :is="base"
    class="text-slate-800 dark:text-slate-100"
    :class="textBaseToStyle[base]">
    <slot />
  </Component>
</template>
