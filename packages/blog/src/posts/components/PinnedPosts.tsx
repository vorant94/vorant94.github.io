import { format } from 'date-fns';
import type { FC } from 'react';
import { PublishedAtFormat } from '../../content/index.js';
import { ArchiveListItem, cn, StandOut } from '../../ui/index.js';
import { type PostModel } from '../models/post.model.js';

export const PinnedPosts: FC<PinnedPostsProps> = function ({ posts }) {
  return (
    <menu>
      {posts.map((post) => (
        <StandOut
          className="flex-col"
          key={post.id}>
          <span className="flex gap-3 items-center">
            <span className="-scale-x-100">📌</span>

            <ArchiveListItem
              left={post.matter.title}
              right={format(post.matter.publishedAt, PublishedAtFormat.SHORT)}
              href={post.path}
              className={cn(`flex-1 !py-0`)}
            />
          </span>
        </StandOut>
      ))}
    </menu>
  );
};

export interface PinnedPostsProps {
  posts: PostModel[];
}
