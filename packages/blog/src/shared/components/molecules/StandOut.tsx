import classNames from 'classnames';
import type { HTMLAttributes, PropsWithChildren } from 'react';
import { type ReactElement } from 'react';

export interface StandOutProps
  extends Pick<HTMLAttributes<HTMLElement>, 'className'> {}

export function StandOut({
  className,
  children,
}: PropsWithChildren<StandOutProps>): ReactElement {
  return (
    <section
      className={classNames('border rounded-md p-5 m-3 flex gap-3', className)}>
      {children}
    </section>
  );
}
