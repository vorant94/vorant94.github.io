import { THEME } from '@/shared/theme.ts';
import classNames from 'classnames';
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
      className={classNames(
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
