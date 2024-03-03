import { cn } from '@digital-garden/utils';
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
        'text-slate-500 decoration-cyan-500 decoration-dotted decoration-4 underline-offset-4 hover:text-cyan-500 hover:underline group-hover:text-cyan-500 group-hover:underline',
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
