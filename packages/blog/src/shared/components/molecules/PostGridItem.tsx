import type { CollectionEntry } from 'astro:content';
import type { ReactElement } from 'react';
import { PostsService } from '../../PostsService.ts';
import { Card } from '../atoms/Card.tsx';

export interface PostListItemProps {
  post: CollectionEntry<'posts'>;
  publishedAtFormat?: string;
}

export function PostGridItem({
  post,
  publishedAtFormat,
}: PostListItemProps): ReactElement {
  return (
    <a
      href={PostsService.getFullPath(post)}
      style={{
        '--cover-image-url': `url('${post.data.coverImage?.src ?? ''}')`,
      }}
      className="text-black hover:text-white bg-center bg-no-repeat bg-[image:var(--cover-image-url)] rounded-md group grayscale-[50%]">
      <Card className="flex gap-2 backdrop-blur justify-between">
        <span className="py-1 px-2 bg-white group-hover:bg-slate-800 rounded-md truncate">
          {post.data.title}
        </span>
        <span className="py-1 px-2 bg-white group-hover:bg-slate-800 rounded-md whitespace-nowrap">
          {PostsService.formatPublishedAt(post, publishedAtFormat)}
        </span>
      </Card>
    </a>
  );
}
