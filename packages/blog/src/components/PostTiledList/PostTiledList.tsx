import classNames from 'classnames';
import type { FunctionComponent, PropsWithChildren } from 'react';
import {
  PostTiledListItem,
  type PostTiledListItemComponent,
} from './PostTiledListItem.tsx';

const PostTiledList: PostTiledListComponent = function ({ children }) {
  return <ul className={classNames('flex flex-col gap-2')}>{children}</ul>;
};

PostTiledList.Item = PostTiledListItem;

export { PostTiledList };

export interface PostTiledListComponent
  extends FunctionComponent<PropsWithChildren<PostTiledListProps>> {
  Item: PostTiledListItemComponent;
}

export interface PostTiledListProps {}
