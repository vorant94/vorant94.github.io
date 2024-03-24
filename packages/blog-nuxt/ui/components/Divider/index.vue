<script setup lang="ts">
withDefaults(defineProps<{ isLeft?: boolean; isRight?: boolean }>(), {
  isLeft: true,
  isRight: true,
});
</script>

<template>
  <div class="relative flex py-5 items-center">
    <div
      v-if="isLeft"
      class="border-slate-300 dark:border-slate-600 flex-grow border-t"></div>
    <div
      class="flex-shrink"
      :class="{
        'ml-4': isLeft,
        'mr-4': isRight,
      }">
      <slot />
    </div>
    <div
      v-if="isRight"
      class="border-slate-300 dark:border-slate-600 flex-grow border-t"></div>
  </div>
</template>
