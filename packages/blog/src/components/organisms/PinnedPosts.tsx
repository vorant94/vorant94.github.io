import type { ReactElement } from 'react';
import type { Post } from '../../shared/posts.service.ts';
import { PostListItem } from '../molecules/PostListItem';
import { StandOut } from '../molecules/StandOut';

export interface PinnedPostsProps {
  posts: Post[];
}

export function PinnedPosts({ posts }: PinnedPostsProps): ReactElement {
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
}
