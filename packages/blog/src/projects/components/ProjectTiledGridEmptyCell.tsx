import type { ComponentPropsWithoutRef, FC, PropsWithChildren } from 'react';
import { Link, cn } from '../../ui/index.js';

export const ProjectTiledGridEmptyCell: FC<
  PropsWithChildren<ProjectTiledGridCellProps>
> = function ({ href, children }) {
  return (
    <div
      className={cn(
        'flex h-24 items-center justify-center relative overflow-hidden rounded-md duration-100 border border-transparent group cursor-pointer hover:border-slate-300 hover:dark:border-slate-600 hover:shadow-md hover:scale-105',
      )}>
      <Link
        href={href}
        className={cn('flex items-center p-3')}>
        {children}
      </Link>
    </div>
  );
};

export interface ProjectTiledGridCellProps
  extends Pick<ComponentPropsWithoutRef<'a'>, 'href'> {}
