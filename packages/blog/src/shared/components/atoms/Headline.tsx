import classNames from 'classnames';
import type { PropsWithChildren, ReactElement } from 'react';
import { THEME } from '../../Theme.ts';

export function Headline({
  children,
}: PropsWithChildren<HeadlineProps>): ReactElement {
  return (
    <h3 className={classNames('text-2xl font-semibold', THEME.text)}>
      {children}
    </h3>
  );
}

export interface HeadlineProps {}
