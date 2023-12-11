import classNames from 'classnames';
import type { HTMLAttributes, PropsWithChildren, ReactElement } from 'react';

export interface StrongProps extends HTMLAttributes<HTMLSpanElement> {}

export function Strong({
  children,
  className,
}: PropsWithChildren<StrongProps>): ReactElement {
  return (
    <strong
      className={classNames(
        'text-slate-800 dark:text-slate-50 font-extrabold',
        className,
      )}>
      {children}
    </strong>
  );
}
