import type { ReactElement } from 'react';
import type { Post } from '../../shared/posts.service.ts';
import { PostListItem } from '../molecules/PostListItem';

export interface PostListProps {
  posts: Post[];
  publishedAtFormat?: string;
}

export function PostList({
  posts,
  publishedAtFormat,
}: PostListProps): ReactElement {
  return (
    <ul className="flex flex-col divide-y divide-dashed divide-slate-300 dark:divide-slate-600">
      {posts.map((post) => (
        <li
          className="flex flex-col py-3 text-medium"
          key={post.id}>
          <PostListItem
            post={post}
            publishedAtFormat={publishedAtFormat}
          />
        </li>
      ))}
    </ul>
  );
}
