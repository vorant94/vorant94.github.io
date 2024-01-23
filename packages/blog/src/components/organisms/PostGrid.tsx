import classNames from 'classnames';
import type { FunctionComponent } from 'react';
import type { Post } from '../../shared/posts.service.ts';
import { THEME } from '../../shared/theme.ts';
import { PostGridItem } from '../molecules/PostGridItem.tsx';

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

export interface PostGridProps {
  posts: Post[];
  publishedAtFormat?: string;
}
