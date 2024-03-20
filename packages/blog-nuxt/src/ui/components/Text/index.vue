<script setup lang="ts">
import { type TextBase, textBaseToStyle } from '~/ui/components/Text/models';

defineProps<{ base: TextBase }>();
</script>

<template>
  <component
    :is="base"
    class="text-slate-800 dark:text-slate-100"
    :class="textBaseToStyle[base]">
    <slot />
  </component>
</template>
