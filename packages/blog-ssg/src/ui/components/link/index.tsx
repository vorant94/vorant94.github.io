import { cn } from '@/core/cn.js';
import {
  type ComponentPropsWithoutRef,
  type FC,
  type PropsWithChildren,
} from 'react';

export const Link: FC<PropsWithChildren<LinkProps>> = function ({
  size = 'md',
  className,
  children,
  ...rest
}) {
  return (
    <a
      className={cn(
        'text-slate-500 decoration-cyan-500 decoration-dotted decoration-4 underline-offset-4 hover:text-cyan-500 hover:underline group-hover:text-cyan-500 group-hover:underline',
        linkSizeToStyles[size],
        className,
      )}
      {...rest}>
      {children}
    </a>
  );
};

export interface LinkProps extends ComponentPropsWithoutRef<'a'> {
  size?: LinkSize;
}

export const linkSizes = ['sm', 'md'] as const;
export type LinkSize = (typeof linkSizes)[number];
export const linkSizeToStyles = {
  sm: 'text-sm font-light',
  md: '',
} as const satisfies Record<LinkSize, string>;
