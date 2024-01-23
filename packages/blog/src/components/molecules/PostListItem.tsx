import classNames from 'classnames';
import type { AnchorHTMLAttributes, FunctionComponent } from 'react';
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
    <a
      href={getPostFullPath(post)}
      className={classNames(
        ...THEME.primaryText,
        THEME.linkDecoration,
        'flex gap-3 items-center hover:text-cyan-500',
        className,
      )}>
      <span className="flex-1 truncate">{post.data.title}</span>
      <span className="whitespace-nowrap text-xs">
        {formatPostPublishedAt(post, publishedAtFormat)}
      </span>
    </a>
  );
};

export interface PostListItemProps
  extends Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'className'> {
  post: Post;
  publishedAtFormat?: PublishedAtFormat;
}
