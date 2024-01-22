import classNames from 'classnames';
import type { PropsWithChildren, ReactElement } from 'react';
import { THEME } from '../../shared/theme';

export function Caption({ children }: PropsWithChildren): ReactElement {
  return (
    <span className={classNames('text-sm', THEME.secondaryText)}>
      {children}
    </span>
  );
}

export interface CaptionPros {}
