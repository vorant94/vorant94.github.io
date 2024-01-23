import classNames from 'classnames';
import type {
  FunctionComponent,
  HTMLAttributes,
  PropsWithChildren,
} from 'react';
import { THEME } from '../foundation';

export const Card: FunctionComponent<PropsWithChildren<CardProps>> = function ({
  children,
  className,
}) {
  return (
    <div
      className={classNames(
        ...THEME.border,
        ...THEME.background,
        'border rounded-md p-5 flex gap-3',
        className,
      )}>
      {children}
    </div>
  );
};
export interface CardProps
  extends Pick<HTMLAttributes<HTMLDivElement>, 'className'> {}
