import {
  formatPublishedAt,
  PublishedAtFormat,
} from '@/shared/collection.helpers';
import { getPostFullPath, type Post } from '@/shared/post.helpers';
import { cn } from '@/shared/react.helpers';
import { theme } from '@/shared/tailwind.helpers';
import type { ComponentPropsWithoutRef, FunctionComponent } from 'react';
import { Link } from '../Link';

export const Item: ItemComponent = function ({
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
        className={cn(...theme.primaryText, 'flex gap-3 items-center')}
        aria-label={post.data.title}>
        <span className="flex-1 truncate">{post.data.title}</span>
        <span className="whitespace-nowrap text-xs">
          {formatPublishedAt(post.data.publishedAt, publishedAtFormat)}
        </span>
      </Link>
    </li>
  );
};

export type ItemComponent = FunctionComponent<ItemProps>;

export interface ItemProps extends ComponentPropsWithoutRef<'li'> {
  post: Post;
  publishedAtFormat?: PublishedAtFormat;
}
