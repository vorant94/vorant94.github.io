import classNames from 'classnames';
import type { HTMLAttributes, ReactElement } from 'react';
import { PostsService, type Post } from '../../shared/posts.service';
import { THEME } from '../../shared/theme';

export function PostListItem({
  className,
  post,
  publishedAtFormat,
}: PostListItemProps): ReactElement {
  return (
    <a
      href={PostsService.getFullPath(post)}
      className={classNames(
        ...THEME.primaryText,
        THEME.linkDecoration,
        'flex gap-3 items-center hover:text-cyan-500',
        className,
      )}>
      <span className="flex-1 truncate">{post.data.title}</span>
      <span className="whitespace-nowrap text-xs">
        {PostsService.formatPublishedAt(post, publishedAtFormat)}
      </span>
    </a>
  );
}

export interface PostListItemProps
  extends Pick<HTMLAttributes<HTMLElement>, 'className'> {
  post: Post;
  publishedAtFormat?: string;
}
