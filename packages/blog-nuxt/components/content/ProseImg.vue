<script setup lang="ts">
import { withTrailingSlash, withLeadingSlash, joinURL } from 'ufo';

const props = withDefaults(
  defineProps<{
    src?: string;
    alt?: string;
    width?: string | number;
    height?: string | number;
  }>(),
  { src: '', alt: '' },
);

const refinedSrc = computed(() => {
  if (props.src?.startsWith('/') && !props.src.startsWith('//')) {
    const _base = withLeadingSlash(
      withTrailingSlash(useRuntimeConfig().app.baseURL),
    );
    if (_base !== '/' && !props.src.startsWith(_base)) {
      return joinURL(_base, props.src);
    }
  }
  return props.src;
});
</script>

<template>
  <img
    class="mx-auto mt-6"
    :src="refinedSrc"
    :alt="alt"
    :width="width"
    :height="height" />
</template>
