import { cn } from '@/shared/react.helpers';
import type { FunctionComponent, PropsWithChildren } from 'react';
import { Item, type ItemComponent } from './Item';

const PostTiledList: PostTiledListComponent = function ({ children }) {
  return <ul className={cn('flex flex-col gap-2')}>{children}</ul>;
};

PostTiledList.Item = Item;

export { PostTiledList };

export interface PostTiledListComponent
  extends FunctionComponent<PropsWithChildren<PostTiledListProps>> {
  Item: ItemComponent;
}

export interface PostTiledListProps {}

export type {
  ItemComponent as PostTiledListItemComponent,
  ItemProps as PostTiledListItemProps,
} from './Item';
