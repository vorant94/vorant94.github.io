import { cn } from '@digital-garden/utils';
import type { ComponentPropsWithoutRef, FunctionComponent } from 'react';

export const CardOverlay: OverlayComponent = function ({ className, ...rest }) {
  return (
    <div
      className={cn(
        'rounded-md p-5 absolute left-0 top-0 w-full h-full',
        className,
      )}
      {...rest}></div>
  );
};

export type OverlayComponent = FunctionComponent<OverlayProps>;

export interface OverlayProps extends ComponentPropsWithoutRef<'div'> {}
