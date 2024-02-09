import { Link, type LinkProps } from '@/components/Link';
import { THEME } from '@/shared/theme';
import classNames from 'classnames';
import {
  useEffect,
  useState,
  type FunctionComponent,
  type PropsWithChildren,
} from 'react';

// has prefix Nav even internally in order to avoid conflicts with Link coming from components
export const NavLink: LinkComponent = function ({
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
          'text-2xl p-3 md:p-4 rounded-full border-2',
          THEME.background,
          THEME.border,
          'lg:text-sm lg:p-0 lg:bg-none dark:lg:bg-none lg:rounded-none lg:border-none',
          THEME.link,
          THEME.linkDecoration,
          { 'underline !text-cyan-500': isLinkActive },
          className,
        )}
        href={href}
        prefetch="hover"
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

export type LinkComponent = FunctionComponent<PropsWithChildren<NavLinkProps>>;

export interface NavLinkProps extends LinkProps {}
