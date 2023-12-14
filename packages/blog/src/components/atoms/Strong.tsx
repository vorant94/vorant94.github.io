import classNames from 'classnames';
import type { PropsWithChildren, ReactElement } from 'react';
import { THEME } from '../../shared/theme';

export function Strong({
  children,
}: PropsWithChildren<StrongProps>): ReactElement {
  return (
    <strong className={classNames(...THEME.primaryText, 'font-semibold')}>
      {children}
    </strong>
  );
}

export interface StrongProps {}
