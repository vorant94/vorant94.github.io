import Giscus from '@giscus/react';
import { type FunctionComponent } from 'react';

export const Comments: FunctionComponent<CommentsProps> = function ({
  category,
  categoryId,
  term,
}) {
  return (
    <Giscus
      repo="vorant94/digital-garden"
      repoId="R_kgDOKWcyPw"
      category={category}
      categoryId={categoryId}
      mapping="specific"
      term={term}
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
  category: string;
  categoryId: string;
  term: string;
}
