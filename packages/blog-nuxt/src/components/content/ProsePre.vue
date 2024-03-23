<script setup lang="ts">
withDefaults(
  defineProps<{
    code?: string;
    language?: string | null;
    filename?: string | null;
    highlights?: any[];
    meta?: string | null;
    class?: string | null;
  }>(),
  {
    code: '',
    language: null,
    filename: null,
    highlights: () => [],
    meta: null,
    class: null,
  },
);
</script>

<template>
  <!-- TODO create issue in Nuxt Content that shiki root element inline styles are gone -->
  <pre
    class="relative"
    :class="$props.class"
    style="
      background-color: #fff;
      --shiki-dark-bg: #24292e;
      color: #24292e;
      --shiki-dark: #e1e4e8;
    "><slot /></pre>
</template>

<style>
pre code .line {
  display: block;
}

@media (prefers-color-scheme: dark) {
  .shiki,
  .shiki span {
    background-color: var(--shiki-dark-bg) !important;
    color: var(--shiki-dark) !important;
    /* Optional, if you also want font styles */
    font-style: var(--shiki-dark-font-style) !important;
    font-weight: var(--shiki-dark-font-weight) !important;
    text-decoration: var(--shiki-dark-text-decoration) !important;
  }
}
</style>
