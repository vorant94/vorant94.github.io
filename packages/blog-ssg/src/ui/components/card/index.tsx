import { cn } from '@/core/cn.js';
import type {
  ComponentPropsWithoutRef,
  FC,
  PropsWithChildren,
  ReactElement,
} from 'react';
import type { CardOverlay } from './overlay.js';

export const Card: FC<PropsWithChildren<CardProps>> = function ({
  children,
  overlay,
  className,
  ...rest
}) {
  return (
    <div
      className={cn(
        'border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 border rounded-md p-5 flex gap-3 relative',
        className,
      )}
      {...rest}>
      {overlay}
      {children}
    </div>
  );
};

export interface CardProps extends ComponentPropsWithoutRef<'div'> {
  overlay?: ReactElement<ReturnType<typeof CardOverlay>>;
}
