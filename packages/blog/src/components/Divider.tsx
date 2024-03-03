import { cn } from '@digital-garden/utils';
import type { FunctionComponent, PropsWithChildren } from 'react';

export const Divider: FunctionComponent<PropsWithChildren<DividerProps>> =
  function ({ isRight = true, isLeft = true, children }) {
    return (
      <div className="relative flex py-5 items-center">
        {isLeft && <div className={cn('va-border', 'flex-grow border-t')} />}
        <div
          className={cn('flex-shrink', {
            'ml-4': isLeft,
            'mr-4': isRight,
          })}>
          {children}
        </div>
        {isRight && <div className={cn('va-border', 'flex-grow border-t')} />}
      </div>
    );
  };

export interface DividerProps {
  isLeft?: boolean;
  isRight?: boolean;
}
