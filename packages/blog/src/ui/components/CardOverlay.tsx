import type { ComponentPropsWithoutRef, FC } from 'react';
import { cn } from '../utils/cn.js';

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
