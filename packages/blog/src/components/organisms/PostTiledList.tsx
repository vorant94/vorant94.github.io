import classNames from 'classnames';
import type { FunctionComponent } from 'react';
import { type Post } from '../../shared';
import { PostTiledListItem, type PostTiledListItemProps } from '../molecules';

export const PostTiledList: FunctionComponent<PostTiledListProps> = function ({
  posts,
  publishedAtFormat,
}) {
  return (
    <ul className={classNames('flex flex-col gap-2')}>
      {posts.map((post) => (
        <PostTiledListItem
          post={post}
          publishedAtFormat={publishedAtFormat}
          key={post.id}
        />
      ))}
    </ul>
  );
};

export interface PostTiledListProps
  extends Pick<PostTiledListItemProps, 'publishedAtFormat'> {
  posts: Post[];
}
