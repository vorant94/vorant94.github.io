import {
  formatEntryPublishedAt,
  PublishedAtFormat,
} from '@/shared/collection.helpers.ts';
import { getPostFullPath, type Post } from '@/shared/post.helpers.ts';
import { cn } from '@digital-garden/utils';
import type { ComponentPropsWithoutRef, FunctionComponent } from 'react';
import { Link } from '../Link.tsx';

export const PostListItem: FunctionComponent<PostListItemProps> = function ({
  className,
  post,
  publishedAtFormat,
  ...rest
}) {
  return (
    <li
      className={cn('flex flex-col py-3 text-medium', className)}
      {...rest}>
      <Link
        href={getPostFullPath(post)}
        prefetch="hover"
        className={cn('va-primary-text', 'flex gap-3 items-center')}
        aria-label={post.data.title}>
        <span className="flex-1 truncate">{post.data.title}</span>
        <span className="whitespace-nowrap text-xs">
          {formatEntryPublishedAt(post.data.publishedAt, publishedAtFormat)}
        </span>
      </Link>
    </li>
  );
};

export interface PostListItemProps extends ComponentPropsWithoutRef<'li'> {
  post: Post;
  publishedAtFormat?: PublishedAtFormat;
}
