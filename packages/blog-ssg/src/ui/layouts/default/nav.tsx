import { cn } from '@/core/cn.js';
import { DefaultLayoutHeader } from '@/ui/layouts/default/header.js';
import type { FC, ReactNode } from 'react';
import { Button } from '../../components/button/index.js';
import { Icon } from '../../components/icon/index.js';
import { DefaultLayoutNavLink } from './nav-link.js';

export const DefaultLayoutNav: FC = function () {
  return (
    <div x-data="true">
      <nav
        data-testid="desktop-nav"
        className="hidden lg:flex">
        <ul className="flex gap-3 md:gap-4 lg:gap-6">{navLinks}</ul>
      </nav>

      <Button
        x-on:click="$store.defaultLayout.openMobileNav()"
        aria-label="mobile-nav-burger"
        className="lg:hidden">
        <Icon glyph="menu" />
      </Button>

      <template x-teleport="body">
        <div
          x-bind:class="$store.defaultLayout.isMobileNavOpen ? 'translate-y-0' : '-translate-y-full'"
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
                x-on:click="$store.defaultLayout.closeMobileNav()"
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
      </template>
    </div>
  );
};

const navLinks: ReactNode[] = [
  <DefaultLayoutNavLink
    key="about"
    href="/about">
    👨‍💻 About
  </DefaultLayoutNavLink>,
  <DefaultLayoutNavLink
    key="posts"
    href="/posts">
    ✏️ Posts
  </DefaultLayoutNavLink>,
  <DefaultLayoutNavLink
    key="projects"
    href="/projects">
    🏗️ Projects
  </DefaultLayoutNavLink>,
];
