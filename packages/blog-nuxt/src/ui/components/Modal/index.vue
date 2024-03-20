<script setup lang="ts">
const mobileNav = useMobileNav();
const motions = useMotions();

function hideMobileNav() {
  mobileNav.value = false;
}
</script>

<template>
  <transition
    :css="false"
    @leave="(_, done) => motions.mobileNav.leave(done)">
    <div
      v-if="mobileNav"
      v-motion="'mobileNav'"
      :initial="{
        transform: 'translateY(-100%)',
      }"
      :enter="{ transform: 'translateY(0%)', transition: { duration: 300 } }"
      :leave="{ transform: 'translateY(-100%)', transition: { duration: 300 } }"
      class="fixed top-0 left-0 w-dvw h-dvh backdrop-filter backdrop-blur z-10">
      <div
        class="mx-auto sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl flex flex-col h-full">
        <Header>
          <Button
            aria-label="modal-close"
            @click="hideMobileNav()">
            <Icon glyph="close" />
          </Button>
        </Header>

        <slot />
      </div>
    </div>
  </transition>
</template>
