import { cn } from '@/core/cn.js';
import type { ComponentPropsWithoutRef, FC, PropsWithChildren } from 'react';

export const Title: FC<PropsWithChildren<TitleProps>> = function ({
  children,
  base,
  className,
  ...rest
}) {
  const Base = base;

  return (
    <Base
      className={cn(
        'text-slate-800 dark:text-slate-100',
        titleBaseToStyles[base],
        className,
      )}
      {...rest}>
      {children}
    </Base>
  );
};

export interface TitleProps extends ComponentPropsWithoutRef<'h1'> {
  base: TitleBase;
}

export const titleBases = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;
export type TitleBase = (typeof titleBases)[number];
const titleBaseToStyles = {
  h1: 'text-4xl font-extrabold',
  h2: '',
  h3: 'text-2xl font-semibold',
  h4: '',
  h5: '',
  h6: ' text-lg font-medium',
} as const satisfies Record<TitleBase, string>;
