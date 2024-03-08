import { cn } from '@digital-garden/utils';
import type { FunctionComponent, PropsWithChildren } from 'react';

export const Strong: FunctionComponent<PropsWithChildren<StrongProps>> =
  function ({ children }) {
    return (
      <strong className={cn('dg-primary-text', 'font-semibold')}>
        {children}
      </strong>
    );
  };

export interface StrongProps {}
