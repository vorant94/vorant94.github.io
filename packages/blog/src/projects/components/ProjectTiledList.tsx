import type { FC, PropsWithChildren } from 'react';
import { Divider, Title, cn } from '../../ui/index.js';

export const ProjectTiledList: FC<PropsWithChildren<ProjectTiledListProps>> =
  function ({ children, title }) {
    return (
      <div className={cn(`flex flex-col gap-2`)}>
        <Divider isLeft={false}>
          <Title base="h3">{title}</Title>
        </Divider>

        <menu className={cn('flex flex-col gap-4')}>{children}</menu>
      </div>
    );
  };

export interface ProjectTiledListProps {
  title: string;
}
