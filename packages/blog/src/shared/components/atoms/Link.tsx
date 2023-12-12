import classNames from 'classnames';
import type { AnchorHTMLAttributes, PropsWithChildren } from 'react';
import { type ReactElement } from 'react';
import { THEME } from '../../Theme.ts';

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

export function Link({
  href,
  className,
  children,
  ...props
}: PropsWithChildren<LinkProps>): ReactElement {
  return (
    <a
      className={classNames(THEME.link, THEME.linkDecoration, className)}
      href={href}
      {...props}>
      {children}
    </a>
  );
}
