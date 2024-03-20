<script setup lang="ts">
import HeaderLogo from '~/ui/assets/img/header-logo.webp';
import HeaderLogoDark from '~/ui/assets/img/header-logo-dark.webp';
import { defaultLayoutPortal } from '~/ui/layouts/default/models';

const portalRef = ref(null);
provide(defaultLayoutPortal, portalRef);
</script>

<template>
  <header
    class="flex gap-1 items-center p-4 border-b border-slate-300 dark:border-slate-600">
    <nav>
      <ButtonLink
        class="!p-0"
        href="/">
        <ThemedImage
          :src="HeaderLogo"
          :srcDark="HeaderLogoDark"
          alt="Logo"
          width="120" />
      </ButtonLink>
    </nav>

    <div class="flex-1"></div>

    <slot />
  </header>

  <div ref="portalRef"></div>
</template>
