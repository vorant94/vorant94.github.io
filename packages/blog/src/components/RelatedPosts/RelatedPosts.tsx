import {
  PublishedAtFormat,
  formatEntryPublishedAt,
} from '@/shared/collection.helpers.ts';
import { getPostFullPath, type Post } from '@/shared/post.helpers.ts';
import { cn } from '@digital-garden/utils';
import '@fortawesome/fontawesome-free/css/solid.css';
import type { FunctionComponent } from 'react';
import { ArchiveList } from '../ArchiveList/ArchiveList.tsx';
import { ArchiveListItem } from '../ArchiveList/ArchiveListItem.tsx';
import { StandOut } from '../StandOut.tsx';
import { Title } from '../Title.tsx';
import Styles from './RelatedPosts.module.css';

export const RelatedPosts: FunctionComponent<RelatedPostsProps> = function ({
  posts,
}) {
  return (
    <StandOut className="flex-col">
      <details
        className={cn('text-slate-800 dark:text-slate-100', Styles.details)}>
        <summary className="hover:cursor-pointer">
          <Title
            base="h6"
            className="mb-0 inline-block">
            <span className="pl-2">Related posts</span>
          </Title>
        </summary>
        <ArchiveList>
          {posts.map((post) => (
            <ArchiveListItem
              left={post.data.title}
              right={formatEntryPublishedAt(
                post.data.publishedAt,
                PublishedAtFormat.SHORT,
              )}
              href={getPostFullPath(post)}
              key={post.id}
            />
          ))}
        </ArchiveList>
      </details>
    </StandOut>
  );
};

export interface RelatedPostsProps {
  posts: Post[];
}
