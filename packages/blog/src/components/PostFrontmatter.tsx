import {
  formatEntryPublishedAt,
  isEntryDataWithCover,
} from '@/shared/collection.helpers.ts';
import type { Post } from '@/shared/post.helpers.ts';
import type { FunctionComponent } from 'react';
import { Caption } from './Caption.tsx';
import { Tag } from './Tag.tsx';
import { ThemedImage } from './ThemedImage.tsx';

export const PostFrontmatter: FunctionComponent<PostFrontmatterProps> =
  function ({ post, minutesRead }) {
    const { data } = post;

    return (
      <>
        {isEntryDataWithCover(data) && (
          <div className="self-center">
            <ThemedImage
              src={data.coverImage.src}
              srcDark={data.coverImageDark?.src}
              alt={data.coverImageAlt!}
            />
          </div>
        )}

        <h1>{data.title}</h1>

        <div className="flex flex-col lg:flex-row gap-2 lg:items-center justify-between">
          <div className="flex gap-2 items-center">
            <Caption>{formatEntryPublishedAt(data.publishedAt)}</Caption>
            <Caption>&#x2022;</Caption>
            <Caption>{minutesRead}</Caption>
          </div>

          <ul className="flex list-none m-0 p-0 gap-1">
            {data.tags.map((tag) => (
              <li key={tag}>
                <Tag>{tag}</Tag>
              </li>
            ))}
          </ul>
        </div>

        <p>
          <em>{data.description}</em>
        </p>

        {data.code && (
          <p>
            All the code mentioned in the post can be found in my{' '}
            <a
              href={data.code}
              target="_blank">
              GitHub
            </a>
          </p>
        )}
      </>
    );
  };

export interface PostFrontmatterProps {
  post: Post;
  minutesRead: string;
}
