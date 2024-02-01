import {
  PublishedAtFormat,
  THEME,
  formatPostPublishedAt,
  getPostFullPath,
  type Post,
} from '@/shared';
import classNames from 'classnames';
import type { FunctionComponent, PropsWithChildren } from 'react';
import { Caption } from './Caption.tsx';
import { ThemedImage } from './ThemedImage.tsx';
import { Title } from './Title.tsx';

const PostTiledList: PostTiledListComponent = function ({ children }) {
  return <ul className={classNames('flex flex-col gap-2')}>{children}</ul>;
};

const PostTiledListItem: PostTiledListItemComponent = function ({
  post,
  publishedAtFormat,
}) {
  return (
    <li
      className={classNames(
        'flex flex-col p-3 text-medium rounded-md duration-100',
        'hover:border hover:shadow-md hover:scale-105',
        ...THEME.border,
      )}
      key={post.id}>
      <a
        href={getPostFullPath(post)}
        data-astro-prefetch="hover"
        className="flex items-center group">
        <div className="flex-1 overflow-hidden">
          <Title
            className={classNames(
              'truncate group-hover:text-cyan-500 group-hover:underline',
              THEME.linkDecoration,
            )}>
            {post.data.title}
          </Title>
          <Caption>{formatPostPublishedAt(post, publishedAtFormat)}</Caption>
        </div>
        {post.data.coverImage && (
          <ThemedImage
            className="h-20 w-20 object-scale-down"
            src={post.data.coverImage.src}
            srcDark={post.data.coverImageDark?.src}
            alt="post cover image"
          />
        )}
      </a>
    </li>
  );
};

PostTiledList.Item = PostTiledListItem;

export { PostTiledList };

export interface PostTiledListComponent
  extends FunctionComponent<PropsWithChildren<PostTiledListProps>> {
  Item: PostTiledListItemComponent;
}

export interface PostTiledListProps {}

export type PostTiledListItemComponent =
  FunctionComponent<PostTiledListItemProps>;

export interface PostTiledListItemProps {
  post: Post;
  publishedAtFormat?: PublishedAtFormat;
}
