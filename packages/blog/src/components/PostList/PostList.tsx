import { THEME } from '@/shared';
import classNames from 'classnames';
import type { FunctionComponent, PropsWithChildren } from 'react';
import { PostListItem, type PostListItemComponent } from './PostListItem.tsx';

const PostList: PostListComponent = function ({ children }) {
  return (
    <ul
      className={classNames(
        'flex flex-col divide-y divide-dashed',
        ...THEME.divide,
      )}>
      {children}
    </ul>
  );
};

PostList.Item = PostListItem;

export { PostList };

export interface PostListComponent
  extends FunctionComponent<PropsWithChildren<PostListProps>> {
  Item: PostListItemComponent;
}

export interface PostListProps {}
