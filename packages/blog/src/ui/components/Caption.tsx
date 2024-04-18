import type { ComponentPropsWithoutRef, FC, PropsWithChildren } from 'react';
import { cn } from '../utils/cn.js';

export const Caption: FC<PropsWithChildren<CaptionPros>> = function ({
  children,
  className,
  ...rest
}) {
  return (
    <span
      className={cn('text-sm text-slate-500', className)}
      {...rest}>
      {children}
    </span>
  );
};

export interface CaptionPros extends ComponentPropsWithoutRef<'span'> {}
