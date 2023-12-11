import type { CollectionEntry } from 'astro:content';
import type { ReactElement } from 'react';
import { StandOut } from '../molecules/StandOut';
import { PostList } from './PostList';
import './RelatedPosts.module.css';

export interface RelatedPostsProps {
  posts: CollectionEntry<'posts'>[];
}

export function RelatedPosts({ posts }: RelatedPostsProps): ReactElement {
  return (
    <StandOut className="flex-col">
      <details>
        <summary className="text-lg font-medium hover:cursor-pointer">
          <span className="pl-1">Related posts</span>
        </summary>
        <PostList posts={posts} />
      </details>
    </StandOut>
  );
}
