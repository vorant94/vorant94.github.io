import classNames from 'classnames';
import type { FunctionComponent, LiHTMLAttributes } from 'react';
import {
  PublishedAtFormat,
  formatPostPublishedAt,
  getPostFullPath,
  type Post,
} from '../../shared';
import { THEME } from '../foundation';

export const PostListItem: FunctionComponent<PostListItemProps> = function ({
  className,
  post,
  publishedAtFormat,
}) {
  return (
    <li className={classNames('flex flex-col py-3 text-medium', className)}>
      <a
        href={getPostFullPath(post)}
        className={classNames(
          ...THEME.primaryText,
          THEME.linkDecoration,
          'flex gap-3 items-center hover:text-cyan-500',
        )}>
        <span className="flex-1 truncate">{post.data.title}</span>
        <span className="whitespace-nowrap text-xs">
          {formatPostPublishedAt(post, publishedAtFormat)}
        </span>
      </a>
    </li>
  );
};

export interface PostListItemProps
  extends Pick<LiHTMLAttributes<HTMLLIElement>, 'className'> {
  post: Post;
  publishedAtFormat?: PublishedAtFormat;
}
