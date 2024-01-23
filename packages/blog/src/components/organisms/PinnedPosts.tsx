import type { FunctionComponent } from 'react';
import type { Post } from '../../shared';
import { PostListItem, StandOut } from '../molecules';

export const PinnedPosts: FunctionComponent<PinnedPostsProps> = function ({
  posts,
}) {
  return (
    <>
      {posts.map((post) => (
        <StandOut
          className="flex-col"
          key={post.id}>
          <span className="flex gap-3 items-center">
            <span className="-scale-x-100">📌</span>
            <PostListItem
              post={post}
              className="flex-1"
            />
          </span>
        </StandOut>
      ))}
    </>
  );
};

export interface PinnedPostsProps {
  posts: Post[];
}
