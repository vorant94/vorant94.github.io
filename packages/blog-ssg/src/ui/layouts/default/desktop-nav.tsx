import type { FC } from 'react';
import { Button } from '../../components/button/index.js';
import { Icon } from '../../components/icon/index.js';
import { navLinks } from './nav-link.js';

export const DefaultLayoutDesktopNav: FC = function () {
  return (
    <>
      <nav
        data-testid="desktop-nav"
        className="hidden lg:flex">
        <ul className="flex gap-3 md:gap-4 lg:gap-6">{navLinks}</ul>
      </nav>

      <Button
        x-data="true"
        x-on:click="$store.mobileNav.toggle()"
        aria-label="mobile-nav-burger"
        className="lg:hidden">
        <Icon glyph="menu" />
      </Button>
    </>
  );
};
