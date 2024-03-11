import { Link } from '@/components/Link.tsx';
import { cn } from '@digital-garden/utils';
import type {
  ComponentPropsWithoutRef,
  FunctionComponent,
  PropsWithChildren,
} from 'react';

export const ProjectGridEmptyCell: FunctionComponent<
  PropsWithChildren<ProjectGridEmptyCellProps>
> = function ({ children, href }) {
  return (
    <div
      className={cn(
        'flex h-24 items-center justify-center rounded-2xl duration-100 border border-transparent group  cursor-pointer',
        'hover:border-slate-300 hover:dark:border-slate-600 hover:shadow-md hover:scale-105',
      )}>
      <Link
        href={href}
        prefetch={'hover'}
        className={cn('flex items-center p-3')}>
        {children}
      </Link>
    </div>
  );
};
export interface ProjectGridEmptyCellProps
  extends Pick<ComponentPropsWithoutRef<'a'>, 'href'> {}
