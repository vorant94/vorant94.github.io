import {
  PublishedAtFormat,
  THEME,
  formatPostPublishedAt,
  getPostFullPath,
  type Post,
} from '@/shared';
import classNames from 'classnames';
import type { FunctionComponent, LiHTMLAttributes } from 'react';
import { Link } from '../Link';

export const PostListItem: PostListItemComponent = function ({
  className,
  post,
  publishedAtFormat,
}) {
  return (
    <li className={classNames('flex flex-col py-3 text-medium', className)}>
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

export interface PostListItemProps
  extends Pick<LiHTMLAttributes<HTMLLIElement>, 'className'> {
  post: Post;
  publishedAtFormat?: PublishedAtFormat;
}
