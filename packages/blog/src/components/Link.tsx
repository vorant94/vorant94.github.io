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
  level,
  ...rest
}) {
  return (
    <a
      className={cn(
        theme.link,
        theme.linkDecoration,
        {
          'text-sm font-light': level === 'sm',
        },
        className,
      )}
      href={href}
      data-astro-prefetch={prefetch}
      {...rest}>
      {children}
    </a>
  );
};

export interface LinkProps extends ComponentPropsWithoutRef<'a'> {
  prefetch?: 'hover' | 'tap' | 'viewport' | 'load';
  level?: LinkLevel;
}

export const LINK_LEVELS = ['md', 'sm'] as const;
export type LinkLevel = (typeof LINK_LEVELS)[number];
