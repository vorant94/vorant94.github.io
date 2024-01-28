import { Link, type LinkProps } from '@/components';
import { THEME } from '@/shared';
import classNames from 'classnames';
import type { FunctionComponent, PropsWithChildren } from 'react';

const Nav: NavComponent = function ({ children }) {
  return <ul className="flex gap-3 md:gap-4 lg:gap-6">{children}</ul>;
};

const NavLink: NavLinkComponent = function ({
  href,
  className,
  isActive,
  children,
  ...props
}) {
  return (
    <li>
      <Link
        className={classNames(
          'hover:underline font-semibold text-sm',
          THEME.link,
          THEME.linkDecoration,
          { 'underline !text-cyan-500': isActive },
          className,
        )}
        href={href}
        {...props}>
        {children}
      </Link>
    </li>
  );
};

Nav.Link = NavLink;

export { Nav };

export interface NavComponent
  extends FunctionComponent<PropsWithChildren<NavProps>> {
  Link: NavLinkComponent;
}

export interface NavProps {}

export type NavLinkComponent = FunctionComponent<
  PropsWithChildren<NavLinkProps>
>;

export interface NavLinkProps extends LinkProps {
  // since we are in SSG mode, the component itself has no option to compare its href to the current path
  // (the component is ran during build only), hence we need to define whether current link should be active or not
  // from outside all the way up to Astro-based layout, that does have access to the current path during the build
  isActive?: boolean;
}
