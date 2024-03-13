<script setup lang="ts">
import angularLogo from './angular-logo.png';
import reactLogo from './react-logo.svg';
import spiderManTriple from './spider-man-triple.jpg';
import vueLogo from './vue-logo.png';
</script>

<template>
  <CenteredLayout>
    <div class="relative">
      <img :src="spiderManTriple" />

      <img
        class="absolute top-[160px] left-[70px] w-24 h-24"
        :src="vueLogo" />

      <img
        class="absolute top-[110px] left-[250px] w-24 h-24"
        :src="reactLogo" />

      <img
        class="absolute top-[165px] left-[400px] w-24 h-24"
        :src="angularLogo" />
    </div>
  </CenteredLayout>
</template>
