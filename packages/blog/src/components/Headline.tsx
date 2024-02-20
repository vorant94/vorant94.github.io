import { cn } from '@/shared/react.helpers';
import { THEME } from '@/shared/theme';
import type { FunctionComponent, PropsWithChildren } from 'react';

export const Headline: FunctionComponent<PropsWithChildren<HeadlineProps>> =
  function ({ children }) {
    return (
      <h3 className={cn('text-2xl font-semibold', ...THEME.primaryText)}>
        {children}
      </h3>
    );
  };

export interface HeadlineProps {}
