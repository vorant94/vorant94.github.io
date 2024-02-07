import { THEME } from '@/shared';
import classNames from 'classnames';
import {
  type ComponentPropsWithoutRef,
  type FunctionComponent,
  type PropsWithChildren,
} from 'react';

export const Link: FunctionComponent<PropsWithChildren<LinkProps>> = function ({
  href,
  className,
  children,
  prefetch,
  ...rest
}) {
  return (
    <a
      className={classNames(THEME.link, THEME.linkDecoration, className)}
      href={href}
      data-astro-prefetch={prefetch}
      {...rest}>
      {children}
    </a>
  );
};

export interface LinkProps extends ComponentPropsWithoutRef<'a'> {
  prefetch?: 'hover' | 'tap' | 'viewport' | 'load';
}
