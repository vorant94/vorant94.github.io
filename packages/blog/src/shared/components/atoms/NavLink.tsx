import classNames from 'classnames';
import type { AnchorHTMLAttributes, PropsWithChildren } from 'react';
import { type ReactElement } from 'react';
import { THEME } from '../../Theme.ts';
import { Link } from './Link.tsx';

export interface NavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  isActive?: boolean;
}

export function NavLink({
  href,
  className,
  isActive,
  children,
  ...props
}: PropsWithChildren<NavLinkProps>): ReactElement {
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
}
