import { format } from 'date-fns';
import type { FC } from 'react';
import { PublishedAtFormat } from '../../content/index.js';
import {
  ArchiveList,
  ArchiveListItem,
  cn,
  StandOut,
  Title,
} from '../../ui/index.js';
import { type PostModel } from '../models/post.model.js';

export const RelatedPosts: FC<RelatedPostsProps> = function ({ posts }) {
  return (
    <StandOut className="flex-col">
      <details
        className={cn(
          'text-slate-800 dark:text-slate-100',
          `related-posts__details`,
        )}>
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
              key={post.id}
              left={post.matter.title}
              right={format(post.matter.publishedAt, PublishedAtFormat.SHORT)}
              href={post.path}
            />
          ))}
        </ArchiveList>
      </details>
    </StandOut>
  );
};

export interface RelatedPostsProps {
  posts: PostModel[];
}
