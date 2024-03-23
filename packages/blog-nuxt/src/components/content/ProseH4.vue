<script setup lang="ts">
const props = defineProps<{ id?: string }>();

const { headings } = useRuntimeConfig().public.mdc;
const generate = computed(() => props.id && headings?.anchorLinks?.h4);
</script>

<template>
  <h4
    :id="id"
    class="group">
    <slot />

    <a
      v-if="id && generate"
      class="no-underline"
      :href="`#${id}`">
      <span class="ml-2 invisible text-sm group-hover:visible"> 🔗 </span>
    </a>
  </h4>
</template>
