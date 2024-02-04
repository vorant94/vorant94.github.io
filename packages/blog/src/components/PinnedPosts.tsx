import type { Post } from '@/shared';
import type { FunctionComponent } from 'react';
import { PostList } from './PostList.tsx';
import { StandOut } from './StandOut.tsx';

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

              <PostList.Item
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
