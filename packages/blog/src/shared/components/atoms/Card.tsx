import classNames from 'classnames';
import type { HTMLAttributes, PropsWithChildren, ReactElement } from 'react';

export interface CardProps
  extends Pick<HTMLAttributes<HTMLDivElement>, 'className'> {}

export function Card({
  children,
  className,
}: PropsWithChildren<CardProps>): ReactElement {
  return (
    <div className={classNames('border rounded-md p-5 flex gap-3', className)}>
      {children}
    </div>
  );
}
