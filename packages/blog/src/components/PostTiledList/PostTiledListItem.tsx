import {
  PublishedAtFormat,
  THEME,
  formatPostPublishedAt,
  getPostFullPath,
  type Post,
} from '@/shared';
import classNames from 'classnames';
import type { FunctionComponent } from 'react';
import { Caption } from '../Caption.tsx';
import { Link } from '../Link.tsx';
import { ThemedImage } from '../ThemedImage.tsx';
import { Title } from '../Title.tsx';

export const PostTiledListItem: PostTiledListItemComponent = function ({
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
      <Link
        href={getPostFullPath(post)}
        prefetch="hover"
        className="flex items-center group">
        <div className="flex-1 overflow-hidden">
          <Title className={classNames('truncate group-hover:text-inherit')}>
            {post.data.title}
          </Title>
          {/* this inline-block removes the inherited text-decoration, since it cannot be simply
          overridden like any other parent css style*/}
          <Caption className="inline-block">
            {formatPostPublishedAt(post, publishedAtFormat)}
          </Caption>
        </div>
        {post.data.coverImage && (
          <ThemedImage
            className="h-20 w-20 object-scale-down"
            src={post.data.coverImage.src}
            srcDark={post.data.coverImageDark?.src}
            alt={post.data.coverImageAlt!}
          />
        )}
      </Link>
    </li>
  );
};

export type PostTiledListItemComponent =
  FunctionComponent<PostTiledListItemProps>;

export interface PostTiledListItemProps {
  post: Post;
  publishedAtFormat?: PublishedAtFormat;
}
