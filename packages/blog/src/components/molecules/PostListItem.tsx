import classNames from 'classnames';
import type { AnchorHTMLAttributes, FunctionComponent } from 'react';
import { PostsService, type Post } from '../../shared/posts.service';
import { THEME } from '../../shared/theme';

export const PostListItem: FunctionComponent<PostListItemProps> = function ({
  className,
  post,
  publishedAtFormat,
}) {
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
};

export interface PostListItemProps
  extends Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'className'> {
  post: Post;
  publishedAtFormat?: string;
}
