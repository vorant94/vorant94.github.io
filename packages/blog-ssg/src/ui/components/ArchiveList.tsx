import { cn } from '@/shared/cn.js';
import { Divider } from '@/ui/components/Divider.js';
import { Title } from '@/ui/components/Title.js';
import type { FC, PropsWithChildren } from 'react';

export const ArchiveList: FC<PropsWithChildren<ArchiveListProps>> = function ({
  title,
  children,
}) {
  return (
    <div className={cn(`flex flex-col`)}>
      {title && (
        <Divider isLeft={false}>
          <Title base="h3">{title}</Title>
        </Divider>
      )}
      <menu
        className={cn(
          'flex flex-col divide-y divide-dashed border-slate-300 dark:border-slate-600',
        )}>
        {children}
      </menu>
    </div>
  );
};

export interface ArchiveListProps {
  title?: string;
}
