import classNames from 'classnames';
import type { AnchorHTMLAttributes, PropsWithChildren } from 'react';
import { type ReactElement } from 'react';

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  isActive?: boolean;
}

export function Link({
  href,
  className,
  isActive,
  children,
  ...props
}: PropsWithChildren<LinkProps>): ReactElement {
  return (
    <a
      className={classNames(
        'hover:text-blue-500 hover:underline',
        isActive
          ? 'text-slate-800 dark:text-slate-50 underline'
          : 'text-slate-500',
        className,
      )}
      href={href}
      {...props}>
      {children}
    </a>
  );
}
