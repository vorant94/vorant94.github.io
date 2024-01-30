import { Link, type LinkProps } from '@/components';
import { THEME } from '@/shared';
import classNames from 'classnames';
import {
  useEffect,
  useState,
  type FunctionComponent,
  type PropsWithChildren,
} from 'react';

export const NavLink: NavLinkComponent = function ({
  href,
  className,
  children,
  ...props
}) {
  const isLinkActive = useIsLinkActive(href);

  return (
    <li>
      <Link
        className={classNames(
          'hover:underline font-semibold block text-center',
          'text-2xl p-3 md:p-4',
          'lg:text-sm lg:p-0',
          THEME.link,
          THEME.linkDecoration,
          { 'underline !text-cyan-500': isLinkActive },
          className,
        )}
        href={href}
        {...props}>
        {children}
      </Link>
    </li>
  );
};

// since we are in SSG mode we cannot use window.location.href directly as it throws an Astro exception
// the solution is to use effect to postpone code execution
function useIsLinkActive(pathname?: string): boolean {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const url = new URL(window.location.href);
    setIsActive(url.pathname === pathname);
  }, [isActive]);

  return isActive;
}

export type NavLinkComponent = FunctionComponent<
  PropsWithChildren<NavLinkProps>
>;

export interface NavLinkProps extends LinkProps {}
