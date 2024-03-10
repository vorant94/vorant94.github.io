import { cn } from '@digital-garden/utils';
import type { FunctionComponent, PropsWithChildren } from 'react';

export const ProjectGrid: FunctionComponent<PropsWithChildren> = function ({
  children,
}) {
  return (
    <div className={cn('grid grid-cols-1 md:grid-cols-2 gap-2')}>
      {children}
    </div>
  );
};
