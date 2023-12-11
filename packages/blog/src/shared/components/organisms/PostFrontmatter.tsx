import type { CollectionEntry } from 'astro:content';
import type { ReactElement } from 'react';
import { PostsService } from '../../PostsService.ts';

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

      <div className="flex gap-2 items-center">
        <span className="text-sm text-gray-500">
          {PostsService.formatPublishedAt(post)}
        </span>
        <span className="text-sm text-gray-500">&#x2022;</span>
        <span className="text-sm text-gray-500">{minutesRead}</span>

        <div className="flex-1"></div>

        <ul className="hidden lg:flex list-none m-0 p-0 gap-1">
          {tags.map((tag) => (
            <li
              className="border border-gray-300 rounded-full text-xs font-light text-gray-500 m-0 py-0 px-2"
              key={tag}>
              #{tag}
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
