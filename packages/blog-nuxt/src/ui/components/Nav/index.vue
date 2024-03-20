<script setup lang="ts">
import { navItems } from '~/ui/components/Nav/models';
import { defaultLayoutPortal } from '~/ui/layouts/default/models';

const portalRef = inject(defaultLayoutPortal);

const mobileNav = useMobileNav();

function showMobileNav() {
  mobileNav.value = true;
}
</script>

<template>
  <nav
    data-testid="desktop-nav"
    class="hidden lg:flex">
    <ul class="flex gap-3 md:gap-4 lg:gap-6">
      <NavLink
        v-for="item in navItems"
        :item="item" />
    </ul>
  </nav>

  <Button
    aria-label="mobile-nav-burger"
    class="lg:hidden"
    @click="showMobileNav()">
    <Icon glyph="menu" />
  </Button>

  <template v-if="portalRef">
    <Teleport :to="portalRef">
      <Modal>
        <nav
          data-testid="mobile-nav"
          class="flex-1 flex flex-col justify-center">
          <ul class="flex flex-col gap-3 px-6">
            <NavLink
              v-for="item in navItems"
              :item="item" />
          </ul>
        </nav>
      </Modal>
    </Teleport>
  </template>
</template>
