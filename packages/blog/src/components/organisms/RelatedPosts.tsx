import type { CollectionEntry } from 'astro:content';
import classNames from 'classnames';
import type { ReactElement } from 'react';
import { THEME } from '../../shared/theme';
import { Title } from '../atoms/Title';
import { StandOut } from '../molecules/StandOut';
import { PostList } from './PostList';
import './RelatedPosts.module.css';

export interface RelatedPostsProps {
  posts: CollectionEntry<'posts'>[];
}

export function RelatedPosts({ posts }: RelatedPostsProps): ReactElement {
  return (
    <StandOut className="flex-col">
      <details className={classNames(...THEME.primaryText)}>
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
