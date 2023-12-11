import classNames from 'classnames';
import type { HTMLAttributes, PropsWithChildren, ReactElement } from 'react';

export interface BodyProps extends HTMLAttributes<HTMLSpanElement> {}

export function Body({
  children,
  className,
}: PropsWithChildren<BodyProps>): ReactElement {
  return (
    <span
      className={classNames('text-slate-800 dark:text-slate-50', className)}>
      {children}
    </span>
  );
}
