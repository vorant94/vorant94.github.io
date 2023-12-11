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
        'text-black hover:text-blue-500 hover:underline',
        className,
      )}>
      <span className="flex gap-3">
        <span className="flex-1 truncate">{post.data.title}</span>
        <span>{PostsService.formatPublishedAt(post, publishedAtFormat)}</span>
      </span>
    </a>
  );
}
