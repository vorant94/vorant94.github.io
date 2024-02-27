import { cn } from '@/shared/react.helpers';
import type { FunctionComponent, PropsWithChildren } from 'react';
import { Item, type ItemComponent } from './Item';

const ProjectTiledList: ProjectTiledListComponent = function ({ children }) {
  return <div className={cn('flex flex-col gap-4')}>{children}</div>;
};

ProjectTiledList.Item = Item;

export { ProjectTiledList };

export interface ProjectTiledListComponent
  extends FunctionComponent<PropsWithChildren<ProjectTiledListProps>> {
  Item: ItemComponent;
}

export interface ProjectTiledListProps {}

export type {
  ItemComponent as ProjectTiledListItemComponent,
  ItemProps as ProjectTiledListItemProps,
} from './Item';
