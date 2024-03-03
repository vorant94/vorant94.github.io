import type { Post } from '@/shared/post.helpers.ts';
import { cn } from '@digital-garden/utils';
import '@fortawesome/fontawesome-free/css/solid.css';
import type { FunctionComponent } from 'react';
import { PostList } from '../PostList/PostList.tsx';
import { PostListItem } from '../PostList/PostListItem.tsx';
import { StandOut } from '../StandOut.tsx';
import { Title } from '../Title.tsx';
import Styles from './RelatedPosts.module.css';

export const RelatedPosts: FunctionComponent<RelatedPostsProps> = function ({
  posts,
}) {
  return (
    <StandOut className="flex-col">
      <details className={cn('va-primary-text', Styles.details)}>
        <summary className="hover:cursor-pointer">
          <Title inline={true}>
            <span className="pl-2">Related posts</span>
          </Title>
        </summary>
        <PostList>
          {posts.map((post) => (
            <PostListItem
              post={post}
              key={post.id}
            />
          ))}
        </PostList>
      </details>
    </StandOut>
  );
};

export interface RelatedPostsProps {
  posts: Post[];
}
