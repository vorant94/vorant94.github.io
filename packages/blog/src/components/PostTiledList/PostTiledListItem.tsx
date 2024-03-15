import {
  formatEntryPublishedAt,
  isEntryDataWithCover,
  PublishedAtFormat,
} from '@/shared/collection.helpers.ts';
import { getPostFullPath, type Post } from '@/shared/post.helpers.ts';
import { cn } from '@digital-garden/utils';
import type { FunctionComponent } from 'react';
import { Caption } from '../Caption.tsx';
import { Link } from '../Link.tsx';
import { ThemedImage } from '../ThemedImage.tsx';
import { Title } from '../Title.tsx';

export const PostTiledListItem: FunctionComponent<PostTiledListItemProps> =
  function ({ post, publishedAtFormat }) {
    const { data } = post;

    return (
      // can't use dg-border here, because need to juggle transparency with color to keep siblings stable during scale
      <li
        className={cn(
          'flex flex-col text-medium rounded-md duration-100 border border-transparent group cursor-pointer',
          'hover:border-slate-300 hover:dark:border-slate-600 hover:shadow-md hover:scale-105',
        )}
        key={post.id}>
        <Link
          href={getPostFullPath(post)}
          prefetch="hover"
          className={cn('flex items-center p-3')}>
          {/* adding display: flex here breaks inline-block hack from below */}
          <div className={cn('flex-1 overflow-hidden')}>
            <Title
              base="h6"
              className={cn('truncate group-hover:text-inherit')}>
              {post.data.title}
            </Title>
            {/* this inline-block removes the inherited text-decoration, since it cannot be simply
          overridden like any other parent css style */}
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
