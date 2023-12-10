import { type CollectionEntry } from 'astro:content';
import type { ReactElement } from 'react';

interface CommentsProps {
  post: CollectionEntry<'posts'>;
}

export function Comments({ post }: CommentsProps): ReactElement {
  return (
    <script
      src="https://utteranc.es/client.js"
      repo="vorant94/digital-garden"
      issue-term={post.slug}
      label="comment"
      theme="github-light"
      crossOrigin="anonymous"
      async></script>
  );
}
