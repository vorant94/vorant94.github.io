import type { ComponentPropsWithoutRef, FC, PropsWithChildren } from 'react';
import { Link, cn } from '../../ui/index.js';

export const PostTiledListEmptyItem: FC<
  PropsWithChildren<PostTiledListEmptyItemProps>
> = function ({ href, children }) {
  return (
    <li className={cn(`self-center`)}>
      <Link
        href={href}
        className={cn('p-3')}>
        {children}
      </Link>
    </li>
  );
};

export interface PostTiledListEmptyItemProps
  extends Pick<ComponentPropsWithoutRef<'a'>, 'href'> {}
