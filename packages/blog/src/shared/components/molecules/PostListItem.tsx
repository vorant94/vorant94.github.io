import type { CollectionEntry } from 'astro:content';
import classNames from 'classnames';
import type { HTMLAttributes, ReactElement } from 'react';
import { PostsService } from '../../PostsService';

export interface PostListItemProps
  extends Pick<HTMLAttributes<HTMLElement>, 'className'> {
  post: CollectionEntry<'posts'>;
  publishedAtFormat?: string;
}

export function PostListItem({
  className,
  post,
  publishedAtFormat,
}: PostListItemProps): ReactElement {
  return (
    <a
      href={PostsService.getFullPath(post)}
      className={classNames(
        'text-slate-800 dark:text-slate-50 hover:text-blue-500 hover:underline',
        className,
      )}>
      <span className="flex gap-3 items-center">
        <span className="flex-1 truncate">{post.data.title}</span>
        <span className="whitespace-nowrap text-xs hover:text-blue-500">
          {PostsService.formatPublishedAt(post, publishedAtFormat)}
        </span>
      </span>
    </a>
  );
}
