<script setup lang="ts">
import '@lottiefiles/lottie-player';

// this component is client only because of lottie custom web element,
// that tries to access window object
const props = defineProps<{ src: any; srcDark?: any }>();

const themedSrc = ref(props.src);

const isDark = useMediaQuery('(prefers-color-scheme: dark)');

watch(isDark, () => {
  themedSrc.value = isDark && props.srcDark ? props.srcDark : props.src;
});
</script>

<template>
  <lottie-player :src="themedSrc"></lottie-player>
</template>
