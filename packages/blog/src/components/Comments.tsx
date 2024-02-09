import type { Post } from '@/shared/post.helpers.ts';
import Giscus from '@giscus/react';
import { type FunctionComponent } from 'react';

export const Comments: FunctionComponent<CommentsProps> = function ({ post }) {
  return (
    <Giscus
      repo="vorant94/digital-garden"
      repoId="R_kgDOKWcyPw"
      category="Comments"
      categoryId="DIC_kwDOKWcyP84Cc9LF"
      mapping="specific"
      term={post.slug}
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      theme="preferred_color_scheme"
      lang="en"
      loading="lazy"
    />
  );
};

export interface CommentsProps {
  post: Post;
}
