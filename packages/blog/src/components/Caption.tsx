import { THEME } from '@/shared';
import classNames from 'classnames';
import type { FunctionComponent, PropsWithChildren } from 'react';

export const Caption: FunctionComponent<PropsWithChildren<CaptionPros>> =
  function ({ children }) {
    return (
      <span className={classNames('text-sm', THEME.secondaryText)}>
        {children}
      </span>
    );
  };

export interface CaptionPros {}
