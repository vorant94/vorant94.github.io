import type { ReactElement } from 'react';
import { PostsService, type Post } from '../../shared/posts.service';
import { Caption } from '../atoms/Caption.tsx';
import { ThemedImage } from '../atoms/ThemedImage.tsx';
import { Title } from '../atoms/Title.tsx';

export function PostGridItem({
  post,
  publishedAtFormat,
}: PostGridItemProps): ReactElement {
  return (
    <a
      href={PostsService.getFullPath(post)}
      className="flex items-center">
      <div className="flex-1 overflow-hidden">
        <Title className="truncate">{post.data.title}</Title>
        <Caption>
          {PostsService.formatPublishedAt(post, publishedAtFormat)}
        </Caption>
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
  );
}

export interface PostGridItemProps {
  post: Post;
  publishedAtFormat?: string;
}
