import classNames from 'classnames';
import type { PropsWithChildren, ReactElement } from 'react';
import { THEME } from '../../Theme.ts';

export function Strong({
  children,
}: PropsWithChildren<StrongProps>): ReactElement {
  return (
    <strong className={classNames(THEME.text, 'font-semibold')}>
      {children}
    </strong>
  );
}

export interface StrongProps {}
