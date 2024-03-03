import { cn } from '@digital-garden/utils';
import type { FunctionComponent, PropsWithChildren } from 'react';

export const PostList: FunctionComponent<PropsWithChildren<PostListProps>> =
  function ({ children }) {
    return (
      <ul className={cn('flex flex-col divide-y divide-dashed', 'va-border')}>
        {children}
      </ul>
    );
  };

export interface PostListProps {}
