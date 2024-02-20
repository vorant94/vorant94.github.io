import {
  PublishedAtFormat,
  formatPostPublishedAt,
  getPostFullPath,
  isPostDataWithCover,
  type Post,
} from '@/shared/post.helpers';
import { cn } from '@/shared/react.helpers';
import { THEME } from '@/shared/theme';
import type { FunctionComponent } from 'react';
import { Caption } from '../Caption';
import { Link } from '../Link';
import { ThemedImage } from '../ThemedImage';
import { Title } from '../Title';

export const Item: ItemComponent = function ({ post, publishedAtFormat }) {
  const { data } = post;

  return (
    <li
      className={cn(
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
          <Title className={cn('truncate group-hover:text-inherit')}>
            {post.data.title}
          </Title>
          {/* this inline-block removes the inherited text-decoration, since it cannot be simply
          overridden like any other parent css style*/}
          <Caption className="inline-block">
            {formatPostPublishedAt(post, publishedAtFormat)}
          </Caption>
        </div>
        {isPostDataWithCover(data) && (
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

export type ItemComponent = FunctionComponent<ItemProps>;

export interface ItemProps {
  post: Post;
  publishedAtFormat?: PublishedAtFormat;
}
