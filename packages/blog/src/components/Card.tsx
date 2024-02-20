import { cn } from '@/shared/react.helpers';
import { THEME } from '@/shared/theme';
import type {
  ComponentPropsWithoutRef,
  FunctionComponent,
  PropsWithChildren,
} from 'react';

export const Card: FunctionComponent<PropsWithChildren<CardProps>> = function ({
  children,
  className,
  ...rest
}) {
  return (
    <div
      className={cn(
        ...THEME.border,
        ...THEME.background,
        'border rounded-md p-5 flex gap-3',
        className,
      )}
      {...rest}>
      {children}
    </div>
  );
};
export interface CardProps extends ComponentPropsWithoutRef<'div'> {}
