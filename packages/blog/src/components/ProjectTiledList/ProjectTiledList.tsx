import { cn } from '@/shared/react.helpers';
import type { FunctionComponent, PropsWithChildren } from 'react';

export const ProjectTiledList: FunctionComponent<
  PropsWithChildren<ProjectTiledListProps>
> = function ({ children }) {
  return <div className={cn('flex flex-col gap-4')}>{children}</div>;
};

export interface ProjectTiledListProps {}
