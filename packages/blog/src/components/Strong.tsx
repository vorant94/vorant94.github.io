import { cn } from '@/shared/react.helpers';
import { THEME } from '@/shared/theme';
import type { FunctionComponent, PropsWithChildren } from 'react';

export const Strong: FunctionComponent<PropsWithChildren<StrongProps>> =
  function ({ children }) {
    return (
      <strong className={cn(...THEME.primaryText, 'font-semibold')}>
        {children}
      </strong>
    );
  };

export interface StrongProps {}
