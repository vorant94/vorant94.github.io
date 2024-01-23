import classNames from 'classnames';
import type { FunctionComponent, PropsWithChildren } from 'react';
import { THEME } from '../../shared/theme';

export const Strong: FunctionComponent<PropsWithChildren<StrongProps>> =
  function ({ children }) {
    return (
      <strong className={classNames(...THEME.primaryText, 'font-semibold')}>
        {children}
      </strong>
    );
  };

export interface StrongProps {}
