import classNames from 'classnames';
import type { FunctionComponent } from 'react';
import { type Post } from '../../shared';
import { THEME } from '../foundation';
import { PostListItem, type PostListItemProps } from '../molecules';

export const PostList: FunctionComponent<PostListProps> = function ({
  posts,
  publishedAtFormat,
}) {
  return (
    <ul
      className={classNames(
        'flex flex-col divide-y divide-dashed',
        ...THEME.divide,
      )}>
      {posts.map((post) => (
        <PostListItem
          post={post}
          publishedAtFormat={publishedAtFormat}
          key={post.id}
        />
      ))}
    </ul>
  );
};

export interface PostListProps
  extends Pick<PostListItemProps, 'publishedAtFormat'> {
  posts: Post[];
}
