import '@fortawesome/fontawesome-free/css/brands.css';
import '@fortawesome/fontawesome-free/css/fontawesome.css';
import '@fortawesome/fontawesome-free/css/solid.css';
import Alpine from 'alpinejs';

import './style.css';

document.addEventListener('alpine:init', function () {
  Alpine.store('mobileNav', {
    isOpen: false,
    toggle() {
      this.isOpen = !this.isOpen;
    },
  });
});

window.addEventListener('resize', function () {
  const width = document.documentElement.clientWidth;
  const mobileNav = Alpine.store('mobileNav');
  if (width < 1024 || !mobileNav.isOpen) {
    return;
  }

  Alpine.store('mobileNav').toggle();
});

window.Alpine = Alpine;
Alpine.start();

declare global {
  interface Window {
    Alpine: typeof Alpine;
  }
}

declare module 'alpinejs' {
  interface MobileNavStore {
    isOpen: boolean;
    toggle(): void;
  }

  interface Stores {
    mobileNav: MobileNavStore;
  }
}
