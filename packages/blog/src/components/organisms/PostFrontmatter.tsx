import type { CollectionEntry } from 'astro:content';
import type { ReactElement } from 'react';
import { PostsService } from '../../shared/posts.service';
import { Caption } from '../atoms/Caption';
import { Tag } from '../molecules/Tag.tsx';

export interface PostFrontmatterProps {
  post: CollectionEntry<'posts'>;
  minutesRead: string;
}

export function PostFrontmatter({
  post,
  minutesRead,
}: PostFrontmatterProps): ReactElement {
  const { title, tags, coverImage, description } = post.data;

  return (
    <>
      <h1>{title}</h1>

      <div className="flex flex-col lg:flex-row gap-2 lg:items-center justify-between">
        <div className="flex gap-2 items-center">
          <Caption>{PostsService.formatPublishedAt(post)}</Caption>
          <Caption>&#x2022;</Caption>
          <Caption>{minutesRead}</Caption>
        </div>

        <ul className="flex list-none m-0 p-0 gap-1">
          {tags.map((tag) => (
            <li key={tag}>
              <Tag>{tag}</Tag>
            </li>
          ))}
        </ul>
      </div>

      {coverImage && (
        <div className="self-center">
          <img
            src={coverImage.src}
            alt="cover image"
          />
        </div>
      )}

      <p>
        <em>{description}</em>
      </p>
    </>
  );
}
