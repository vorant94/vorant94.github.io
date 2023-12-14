import classNames from 'classnames';
import type { PropsWithChildren, ReactElement } from 'react';
import { THEME } from '../../shared/theme';

export function Headline({
  children,
}: PropsWithChildren<HeadlineProps>): ReactElement {
  return (
    <h3 className={classNames('text-2xl font-semibold', ...THEME.primaryText)}>
      {children}
    </h3>
  );
}

export interface HeadlineProps {}
