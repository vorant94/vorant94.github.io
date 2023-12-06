import classNames from 'classnames';
import type { PropsWithChildren } from 'react';
import { type ReactElement } from 'react';

export interface DividerProps {
  isLeft?: boolean;
  isRight?: boolean;
}

export function Divider({
  isRight = true,
  isLeft = true,
  children,
}: PropsWithChildren<DividerProps>): ReactElement {
  return (
    <div className="relative flex py-5 items-center">
      {isLeft && <div className="flex-grow border-t" />}
      <div
        className={classNames('flex-shrink', {
          'ml-4': isLeft,
          'mr-4': isRight,
        })}>
        {children}
      </div>
      {isRight && <div className="flex-grow border-t" />}
    </div>
  );
}
