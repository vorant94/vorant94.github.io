import { cn } from '@digital-garden/utils';
import type { FunctionComponent, PropsWithChildren } from 'react';

export const Headline: FunctionComponent<PropsWithChildren<HeadlineProps>> =
  function ({ children }) {
    return (
      <h3 className={cn('text-2xl font-semibold', 'va-primary-text')}>
        {children}
      </h3>
    );
  };

export interface HeadlineProps {}
