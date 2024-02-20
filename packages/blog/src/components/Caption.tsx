import { cn } from '@/shared/react.helpers';
import { theme } from '@/shared/tailwind.helpers';
import type {
  ComponentPropsWithoutRef,
  FunctionComponent,
  PropsWithChildren,
} from 'react';

export const Caption: FunctionComponent<PropsWithChildren<CaptionPros>> =
  function ({ children, className, ...rest }) {
    return (
      <span
        className={cn('text-sm', theme.secondaryText, className)}
        {...rest}>
        {children}
      </span>
    );
  };

export interface CaptionPros extends ComponentPropsWithoutRef<'span'> {}
