import { cn } from '@/shared/react.helpers';
import { theme } from '@/shared/tailwind.helpers';
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
      className={cn(theme.link, theme.linkDecoration, className)}
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
