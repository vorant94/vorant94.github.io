import { cn } from '@/shared/react.helpers';
import type { FunctionComponent, PropsWithChildren } from 'react';

export const Strong: FunctionComponent<PropsWithChildren<StrongProps>> =
  function ({ children }) {
    return (
      <strong className={cn('va-primary-text', 'font-semibold')}>
        {children}
      </strong>
    );
  };

export interface StrongProps {}
