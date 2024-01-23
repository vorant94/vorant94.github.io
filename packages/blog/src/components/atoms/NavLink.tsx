import classNames from 'classnames';
import type { FunctionComponent, PropsWithChildren } from 'react';
import { THEME } from '../foundation';
import { Link, type LinkProps } from './Link';

export const NavLink: FunctionComponent<PropsWithChildren<NavLinkProps>> =
  function ({ href, className, isActive, children, ...props }) {
    return (
      <Link
        className={classNames(
          'hover:underline font-semibold',
          THEME.link,
          THEME.linkDecoration,
          { 'underline !text-cyan-500': isActive },
          className,
        )}
        href={href}
        {...props}>
        {children}
      </Link>
    );
  };

export interface NavLinkProps extends LinkProps {
  isActive?: boolean;
}
