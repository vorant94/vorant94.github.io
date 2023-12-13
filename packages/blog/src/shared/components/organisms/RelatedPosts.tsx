import type { CollectionEntry } from 'astro:content';
import type { ReactElement } from 'react';
import { THEME } from '../../Theme.ts';
import { Title } from '../atoms/Title.tsx';
import { StandOut } from '../molecules/StandOut';
import { PostList } from './PostList';
import './RelatedPosts.module.css';

export interface RelatedPostsProps {
  posts: CollectionEntry<'posts'>[];
}

export function RelatedPosts({ posts }: RelatedPostsProps): ReactElement {
  return (
    <StandOut className="flex-col">
      <details className={THEME.text}>
        <summary className="hover:cursor-pointer">
          <Title inline={true}>
            <span className="pl-2">Related posts</span>
          </Title>
        </summary>
        <PostList posts={posts} />
      </details>
    </StandOut>
  );
}
