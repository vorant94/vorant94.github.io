import type { FC, PropsWithChildren } from 'react';
import { Divider, Title, cn } from '../../ui/index.js';

export const PostTiledList: FC<PropsWithChildren<PostTiledListProps>> =
  function ({ title, children }) {
    return (
      <div className={cn(`flex flex-col gap-2`)}>
        <Divider>
          <Title base="h3">{title}</Title>
        </Divider>

        <menu className={cn('flex flex-col gap-2')}>{children}</menu>
      </div>
    );
  };

export interface PostTiledListProps {
  title: string;
}
