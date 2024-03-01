import type { Post } from '@/shared/post.helpers';
import type { FunctionComponent } from 'react';
import { PostListItem } from './PostList/PostListItem';
import { StandOut } from './StandOut';

export const PinnedPosts: FunctionComponent<PinnedPostsProps> = function ({
  posts,
}) {
  return (
    <>
      <ul>
        {posts.map((post) => (
          <StandOut
            className="flex-col"
            key={post.id}>
            <span className="flex gap-3 items-center">
              <span className="-scale-x-100">📌</span>

              <PostListItem
                post={post}
                className="flex-1 !py-0"
              />
            </span>
          </StandOut>
        ))}
      </ul>
    </>
  );
};

export interface PinnedPostsProps {
  posts: Post[];
}
