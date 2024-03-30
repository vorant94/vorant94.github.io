import { cn } from '@/shared/cn.js';
import type { FC, PropsWithChildren } from 'react';

export const Divider: FC<PropsWithChildren<DividerProps>> = function ({
  isRight = true,
  isLeft = true,
  children,
}) {
  return (
    <div className="relative flex py-5 items-center">
      {isLeft && (
        <div
          className={cn(
            'border-slate-300 dark:border-slate-600 flex-grow border-t',
          )}
        />
      )}
      <div
        className={cn('flex-shrink', {
          'ml-4': isLeft,
          'mr-4': isRight,
        })}>
        {children}
      </div>
      {isRight && (
        <div
          className={cn(
            'border-slate-300 dark:border-slate-600 flex-grow border-t',
          )}
        />
      )}
    </div>
  );
};

export interface DividerProps {
  isLeft?: boolean;
  isRight?: boolean;
}
