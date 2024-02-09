import {
  PublishedAtFormat,
  formatPostPublishedAt,
  getPostFullPath,
  type Post,
} from '@/shared/post.helpers.ts';
import { THEME } from '@/shared/theme.ts';
import classNames from 'classnames';
import type { ComponentPropsWithoutRef, FunctionComponent } from 'react';
import { Link } from '../Link';

export const PostListItem: PostListItemComponent = function ({
  className,
  post,
  publishedAtFormat,
  ...rest
}) {
  return (
    <li
      className={classNames('flex flex-col py-3 text-medium', className)}
      {...rest}>
      <Link
        href={getPostFullPath(post)}
        prefetch="hover"
        className={classNames(...THEME.primaryText, 'flex gap-3 items-center')}
        aria-label={post.data.title}>
        <span className="flex-1 truncate">{post.data.title}</span>
        <span className="whitespace-nowrap text-xs">
          {formatPostPublishedAt(post, publishedAtFormat)}
        </span>
      </Link>
    </li>
  );
};

export type PostListItemComponent = FunctionComponent<PostListItemProps>;

export interface PostListItemProps extends ComponentPropsWithoutRef<'li'> {
  post: Post;
  publishedAtFormat?: PublishedAtFormat;
}
