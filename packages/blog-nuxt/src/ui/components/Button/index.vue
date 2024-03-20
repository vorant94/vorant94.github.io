<script setup lang="ts">
defineProps<{
  isOutlined?: boolean;
}>();
</script>

<template>
  <button
    class="p-1 hover:text-cyan-500"
    :class="{
      'border rounded-2xl hover:outline outline-cyan-500 hover:border-cyan-500':
        isOutlined,
    }">
    <slot />
  </button>
</template>
