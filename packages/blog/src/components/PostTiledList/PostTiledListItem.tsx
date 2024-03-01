import {
  formatEntryPublishedAt,
  isEntryDataWithCover,
  PublishedAtFormat,
} from '@/shared/collection.helpers';
import { getPostFullPath, type Post } from '@/shared/post.helpers';
import { cn } from '@/shared/react.helpers';
import type { FunctionComponent } from 'react';
import { Caption } from '../Caption';
import { Link } from '../Link';
import { ThemedImage } from '../ThemedImage';
import { Title } from '../Title';

export const PostTiledListItem: FunctionComponent<PostTiledListItemProps> =
  function ({ post, publishedAtFormat }) {
    const { data } = post;

    return (
      <li
        className={cn(
          'flex flex-col text-medium rounded-md duration-100',
          'hover:border hover:shadow-md hover:scale-105',
          'va-border',
        )}
        key={post.id}>
        <Link
          href={getPostFullPath(post)}
          prefetch="hover"
          className={cn('flex items-center p-3 group')}>
          <div className={cn('flex-1 overflow-hidden')}>
            <Title className={cn('truncate group-hover:text-inherit')}>
              {post.data.title}
            </Title>
            {/* this inline-block removes the inherited text-decoration, since it cannot be simply
          overridden like any other parent css style*/}
            <Caption className="inline-block">
              {formatEntryPublishedAt(data.publishedAt, publishedAtFormat)}
            </Caption>
          </div>
          {isEntryDataWithCover(data) && (
            <ThemedImage
              className="h-20 w-20 object-scale-down"
              src={data.coverImage.src}
              srcDark={data.coverImageDark?.src}
              alt={data.coverImageAlt!}
            />
          )}
        </Link>
      </li>
    );
  };

export interface PostTiledListItemProps {
  post: Post;
  publishedAtFormat?: PublishedAtFormat;
}
