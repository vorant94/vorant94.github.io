<script setup lang="ts">
import type { ButtonLinkVariant } from '~/ui/components/Button/Link.meta';

withDefaults(
  defineProps<{
    variant?: ButtonLinkVariant;
  }>(),
  { variant: 'default' },
);
</script>

<template>
  <NuxtLink
    class="p-1 hover:text-cyan-500"
    :class="{
      'border rounded-2xl hover:outline outline-cyan-500 hover:border-cyan-500':
        variant === 'outlined',
    }">
    <slot />
  </NuxtLink>
</template>
