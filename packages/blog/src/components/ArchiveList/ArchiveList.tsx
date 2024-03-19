import { cn } from '@digital-garden/utils';
import type { FunctionComponent, PropsWithChildren } from 'react';

export const ArchiveList: FunctionComponent<
  PropsWithChildren<ArchiveListProps>
> = function ({ children }) {
  return (
    <ul className={cn('flex flex-col divide-y divide-dashed', 'dg-border')}>
      {children}
    </ul>
  );
};

export interface ArchiveListProps {}
