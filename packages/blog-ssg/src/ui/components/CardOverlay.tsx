import { cn } from '@/core/cn.js';
import type { ComponentPropsWithoutRef, FC } from 'react';

export const CardOverlay: FC<OverlayProps> = function ({ className, ...rest }) {
  return (
    <div
      className={cn(
        'rounded-md p-5 absolute left-0 top-0 w-full h-full',
        className,
      )}
      {...rest}></div>
  );
};

export interface OverlayProps extends ComponentPropsWithoutRef<'div'> {}
