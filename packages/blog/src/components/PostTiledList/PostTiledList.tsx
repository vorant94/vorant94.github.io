import { cn } from '@digital-garden/utils';
import type { FunctionComponent, PropsWithChildren } from 'react';

export const PostTiledList: FunctionComponent<
  PropsWithChildren<PostTiledListProps>
> = function ({ children }) {
  return <ul className={cn('flex flex-col gap-2')}>{children}</ul>;
};

export interface PostTiledListProps {}
