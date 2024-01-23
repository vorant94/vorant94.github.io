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
        <li
          className="flex flex-col py-3 text-medium"
          key={post.id}>
          <PostListItem
            post={post}
            publishedAtFormat={publishedAtFormat}
          />
        </li>
      ))}
    </ul>
  );
};

export interface PostListProps
  extends Pick<PostListItemProps, 'publishedAtFormat'> {
  posts: Post[];
}
