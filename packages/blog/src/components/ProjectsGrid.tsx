import classNames from 'classnames';
import type { FunctionComponent, PropsWithChildren } from 'react';

export const ProjectsGrid: FunctionComponent<
  PropsWithChildren<ProjectsGridProps>
> = function ({ children }) {
  return (
    <div
      className={classNames('mx-auto grid gap-4 grid-cols-1 md:grid-cols-2')}>
      {children}
    </div>
  );
};

export interface ProjectsGridProps {}
