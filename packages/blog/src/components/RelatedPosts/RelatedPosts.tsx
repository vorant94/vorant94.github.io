import type { Post } from '@/shared/post.helpers.ts';
import { THEME } from '@/shared/theme.ts';
import classNames from 'classnames';
import type { FunctionComponent } from 'react';
import { PostList } from '../PostList';
import { StandOut } from '../StandOut.tsx';
import { Title } from '../Title.tsx';
import styles from './RelatedPosts.module.css';

export const RelatedPosts: FunctionComponent<RelatedPostsProps> = function ({
  posts,
}) {
  return (
    <StandOut className="flex-col">
      <details className={classNames(...THEME.primaryText, styles.details)}>
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
