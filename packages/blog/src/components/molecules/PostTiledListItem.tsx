import classNames from 'classnames';
import type { FunctionComponent } from 'react';
import {
  PublishedAtFormat,
  formatPostPublishedAt,
  getPostFullPath,
  type Post,
} from '../../shared';
import { Caption, ThemedImage, Title } from '../atoms';
import { THEME } from '../foundation';

export const PostTiledListItem: FunctionComponent<PostTiledListItemProps> =
  function ({ post, publishedAtFormat }) {
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
          className="flex items-center">
          <div className="flex-1 overflow-hidden">
            <Title className="truncate">{post.data.title}</Title>
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

export interface PostTiledListItemProps {
  post: Post;
  publishedAtFormat?: PublishedAtFormat;
}
