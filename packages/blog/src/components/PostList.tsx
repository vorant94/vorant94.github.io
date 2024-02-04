import {
  PublishedAtFormat,
  THEME,
  formatPostPublishedAt,
  getPostFullPath,
  type Post,
} from '@/shared';
import classNames from 'classnames';
import type {
  FunctionComponent,
  LiHTMLAttributes,
  PropsWithChildren,
} from 'react';

const PostList: PostListComponent = function ({ children }) {
  return (
    <ul
      className={classNames(
        'flex flex-col divide-y divide-dashed',
        ...THEME.divide,
      )}>
      {children}
    </ul>
  );
};

const PostListItem: PostListItemComponent = function ({
  className,
  post,
  publishedAtFormat,
}) {
  return (
    <li className={classNames('flex flex-col py-3 text-medium', className)}>
      <a
        href={getPostFullPath(post)}
        data-astro-prefetch="hover"
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

PostList.Item = PostListItem;

export { PostList };

export interface PostListComponent
  extends FunctionComponent<PropsWithChildren<PostListProps>> {
  Item: PostListItemComponent;
}

export interface PostListProps {}

export type PostListItemComponent = FunctionComponent<PostListItemProps>;

export interface PostListItemProps
  extends Pick<LiHTMLAttributes<HTMLLIElement>, 'className'> {
  post: Post;
  publishedAtFormat?: PublishedAtFormat;
}
