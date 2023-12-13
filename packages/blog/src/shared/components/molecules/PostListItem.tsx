import type { CollectionEntry } from 'astro:content';
import classNames from 'classnames';
import type { HTMLAttributes, ReactElement } from 'react';
import { PostsService } from '../../PostsService';
import { THEME } from '../../Theme.ts';
export function PostListItem({
  className,
  post,
  publishedAtFormat,
}: PostListItemProps): ReactElement {
  return (
    <a
      href={PostsService.getFullPath(post)}
      className={classNames(
        THEME.text,
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
  post: CollectionEntry<'posts'>;
  publishedAtFormat?: string;
}
