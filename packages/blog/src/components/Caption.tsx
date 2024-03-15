import { cn } from '@digital-garden/utils';
import type {
  ComponentPropsWithoutRef,
  FunctionComponent,
  PropsWithChildren,
} from 'react';

export const Caption: FunctionComponent<PropsWithChildren<CaptionPros>> =
  function ({ children, className, ...rest }) {
    return (
      <span
        className={cn('text-sm text-slate-500', className)}
        {...rest}>
        {children}
      </span>
    );
  };

export interface CaptionPros extends ComponentPropsWithoutRef<'span'> {}
