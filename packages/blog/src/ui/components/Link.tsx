import {
  type ComponentPropsWithoutRef,
  type FC,
  type PropsWithChildren,
} from 'react';
import { isInternalUrl } from '../../http/index.js';
import { cn } from '../utils/cn.js';

export const Link: FC<PropsWithChildren<LinkProps>> = function ({
  size = 'md',
  className,
  children,
  href,
  bindClass = '',
  ...rest
}) {
  return (
    <a
      x-data={`{href: '${href}'}`}
      x-on:mouseenter={`$store.prefetchedLinks.prefetchLink("${href && isInternalUrl(href) ? href : ''}")`}
      x-bind:class={bindClass}
      className={cn(
        'text-slate-500 decoration-cyan-500 decoration-dotted decoration-4 underline-offset-4 hover:text-cyan-500 hover:underline group-hover:text-cyan-500 group-hover:underline',
        linkSizeToStyles[size],
        className,
      )}
      href={href}
      {...rest}>
      {children}
    </a>
  );
};

export interface LinkProps extends ComponentPropsWithoutRef<'a'> {
  size?: LinkSize;
  bindClass?: string;
}

export const linkSizes = ['sm', 'md'] as const;
export type LinkSize = (typeof linkSizes)[number];
export const linkSizeToStyles = {
  sm: 'text-sm font-light',
  md: '',
} as const satisfies Record<LinkSize, string>;
