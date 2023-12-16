import classNames from 'classnames';
import type { HTMLAttributes, PropsWithChildren, ReactElement } from 'react';
import { THEME } from '../../shared/theme';

export interface CardProps
  extends Pick<HTMLAttributes<HTMLDivElement>, 'className'> {}

export function Card({
  children,
  className,
}: PropsWithChildren<CardProps>): ReactElement {
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
}
