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
  isActive?: boolean;
}
