import type { FunctionComponent } from 'react';
import {
  PublishedAtFormat,
  formatPostPublishedAt,
  getPostFullPath,
  type Post,
} from '../../shared';
import { Caption, ThemedImage, Title } from '../atoms';

export const PostGridItem: FunctionComponent<PostGridItemProps> = function ({
  post,
  publishedAtFormat,
}) {
  return (
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
  );
};

export interface PostGridItemProps {
  post: Post;
  publishedAtFormat?: PublishedAtFormat;
}
