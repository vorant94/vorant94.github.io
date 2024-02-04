import { THEME } from '@/shared';
import classNames from 'classnames';
import {
  type AnchorHTMLAttributes,
  type FunctionComponent,
  type PropsWithChildren,
} from 'react';

export const Link: FunctionComponent<PropsWithChildren<LinkProps>> = function ({
  href,
  className,
  children,
  prefetch,
  ...props
}) {
  return (
    <a
      className={classNames(THEME.link, THEME.linkDecoration, className)}
      href={href}
      data-astro-prefetch={prefetch}
      {...props}>
      {children}
    </a>
  );
};

// not ElementRef<'a'> because of TS complains about
// "Type string is not assignable to type HTMLAttributeReferrerPolicy | undefined"
export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  prefetch?: 'hover' | 'tap' | 'viewport' | 'load';
}
