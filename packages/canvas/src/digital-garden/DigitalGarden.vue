<script setup lang="ts">
import dark from './dark.png';
import light from './light.png';
</script>

<template>
  <CenteredLayout>
    <div class="relative w-dvw h-dvh">
      <img
        :src="dark"
        class="absolute top-0 left-0 w-full h-full" />
      <img
        :src="light"
        class="light absolute top-0 left-0 w-full h-full" />
    </div>
  </CenteredLayout>
</template>

<style scoped>
.light {
  clip-path: polygon(0 0, 0 0, 100% 100%, 0 100%);
}
</style>
