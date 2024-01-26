import { THEME, type Post } from '@/shared';
import classNames from 'classnames';
import type { FunctionComponent } from 'react';
import { PostList } from './PostList.tsx';
import './RelatedPosts.module.css';
import { StandOut } from './StandOut.tsx';
import { Title } from './Title.tsx';

export const RelatedPosts: FunctionComponent<RelatedPostsProps> = function ({
  posts,
}) {
  return (
    <StandOut className="flex-col">
      <details className={classNames(...THEME.primaryText)}>
        <summary className="hover:cursor-pointer">
          <Title inline={true}>
            <span className="pl-2">Related posts</span>
          </Title>
        </summary>
        <PostList>
          {posts.map((post) => (
            <PostList.Item
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
