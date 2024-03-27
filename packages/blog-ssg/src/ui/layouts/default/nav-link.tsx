import { cn } from '@/core/cn.js';
import type { FC, PropsWithChildren, ReactNode } from 'react';
import { Link, type LinkProps } from '../../components/link/index.js';

export const DefaultLayoutNavLink: FC<PropsWithChildren<NavLinkProps>> =
  function ({ children, className, href, ...rest }) {
    return (
      <li>
        <Link
          x-data={`{href: '${href}'}`}
          x-bind:class={`window.location.pathname.startsWith(href) && 'underline !text-cyan-500'`}
          href={href}
          className={cn(
            'font-semibold block text-center text-2xl p-3 md:p-4 rounded-full border-2 bg-slate-50 dark:bg-slate-900 border-slate-300 dark:border-slate-600 lg:text-sm lg:p-0 lg:bg-none dark:lg:bg-none lg:rounded-none lg:border-none',
            className,
          )}
          {...rest}>
          {children}
        </Link>
      </li>
    );
  };

export interface NavLinkProps extends LinkProps {}

export const navLinks: ReactNode[] = [
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
