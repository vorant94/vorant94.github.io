import {
  PublishedAtFormat,
  formatEntryPublishedAt,
} from '@/shared/collection.helpers.ts';
import { getPostFullPath, type Post } from '@/shared/post.helpers.ts';
import type { FunctionComponent } from 'react';
import { ArchiveListItem } from './ArchiveList/ArchiveListItem.tsx';
import { StandOut } from './StandOut.tsx';

export const PinnedPosts: FunctionComponent<PinnedPostsProps> = function ({
  posts,
}) {
  return (
    <>
      <ul>
        {posts.map((post) => (
          <StandOut
            className="flex-col"
            key={post.id}>
            <span className="flex gap-3 items-center">
              <span className="-scale-x-100">📌</span>

              <ArchiveListItem
                left={post.data.title}
                right={formatEntryPublishedAt(
                  post.data.publishedAt,
                  PublishedAtFormat.SHORT,
                )}
                href={getPostFullPath(post)}
                className="flex-1 !py-0"
              />
            </span>
          </StandOut>
        ))}
      </ul>
    </>
  );
};

export interface PinnedPostsProps {
  posts: Post[];
}
