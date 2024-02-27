import { cn } from '@/shared/react.helpers';
import { theme } from '@/shared/tailwind.helpers';
import type { FunctionComponent, PropsWithChildren } from 'react';

export const Strong: FunctionComponent<PropsWithChildren<StrongProps>> =
  function ({ children }) {
    return (
      <strong className={cn(...theme.primaryText, 'font-semibold')}>
        {children}
      </strong>
    );
  };

export interface StrongProps {}
