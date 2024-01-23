import classNames from 'classnames';
import type { FunctionComponent } from 'react';
import { type Post } from '../../shared';
import { THEME } from '../foundation';
import { PostGridItem, type PostGridItemProps } from '../molecules';

export const PostGrid: FunctionComponent<PostGridProps> = function ({
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
          <PostGridItem
            post={post}
            publishedAtFormat={publishedAtFormat}
          />
        </li>
      ))}
    </ul>
  );
};

export interface PostGridProps
  extends Pick<PostGridItemProps, 'publishedAtFormat'> {
  posts: Post[];
}
