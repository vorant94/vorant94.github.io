import { cn } from '@/core/cn.js';
import type { FC } from 'react';
import { Button } from '../../components/button/index.js';
import { Icon } from '../../components/icon/index.js';
import { DefaultLayoutHeader } from '../../layouts/default/header.js';
import { navLinks } from './nav-link.js';

export const DefaultLayoutMobileNav: FC = function () {
  return (
    <div
      x-data="true"
      x-bind:class="$store.mobileNav.isOpen ? 'translate-y-0' : '-translate-y-full'"
      x-cloak="true"
      className={cn(
        'fixed top-0 left-0 w-dvw h-dvh backdrop-filter backdrop-blur z-10 transition duration-300',
      )}>
      <div
        className={cn(
          'mx-auto sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl flex flex-col h-full',
        )}>
        <DefaultLayoutHeader>
          <Button
            x-data="true"
            x-on:click="$store.mobileNav.toggle()"
            aria-label="modal-close">
            <Icon glyph="close" />
          </Button>
        </DefaultLayoutHeader>

        <nav
          data-testid="mobile-nav"
          className="flex-1 flex flex-col justify-center">
          <ul className="flex flex-col gap-3 px-6">{navLinks}</ul>
        </nav>
      </div>
    </div>
  );
};
