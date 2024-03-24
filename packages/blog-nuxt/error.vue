<script setup lang="ts">
import lottie404dark from '~/assets/json/lottie-404-dark.json';
import lottie404 from '~/assets/json/lottie-404.json';

useHead({
  title: 'vorant94 | 404 Not Found',
});
</script>

<template>
  <NuxtLayout name="centered">
    <ThemedLottie
      autoplay
      keepLastFrame
      :src="lottie404"
      :srcDark="lottie404dark" />
  </NuxtLayout>
</template>
