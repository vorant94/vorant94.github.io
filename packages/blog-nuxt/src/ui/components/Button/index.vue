<script setup lang="ts">
import type { ButtonVariant } from '~/ui/components/Button/index.meta';

withDefaults(
  defineProps<{
    variant?: ButtonVariant;
  }>(),
  { variant: 'default' },
);
</script>

<template>
  <button
    class="p-1 hover:text-cyan-500"
    :class="{
      'border rounded-2xl hover:outline outline-cyan-500 hover:border-cyan-500':
        variant === 'outlined',
    }">
    <slot />
  </button>
</template>
