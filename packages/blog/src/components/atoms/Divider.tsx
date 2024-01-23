import classNames from 'classnames';
import type { FunctionComponent, PropsWithChildren } from 'react';
import { THEME } from '../foundation';

export const Divider: FunctionComponent<PropsWithChildren<DividerProps>> =
  function ({ isRight = true, isLeft = true, children }) {
    return (
      <div className="relative flex py-5 items-center">
        {isLeft && (
          <div className={classNames(...THEME.border, 'flex-grow border-t')} />
        )}
        <div
          className={classNames('flex-shrink', {
            'ml-4': isLeft,
            'mr-4': isRight,
          })}>
          {children}
        </div>
        {isRight && (
          <div className={classNames(...THEME.border, 'flex-grow border-t')} />
        )}
      </div>
    );
  };

export interface DividerProps {
  isLeft?: boolean;
  isRight?: boolean;
}
