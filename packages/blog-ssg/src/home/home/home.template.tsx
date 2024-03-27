import { cn } from '@/core/cn.js';
import { DefaultLayout } from '@/ui/layouts/default/index.js';
import { type FC } from 'react';

export const HomeTemplate: FC = function () {
  return (
    <DefaultLayout title={`vorant94's Digital Garden`}>
      <p className={cn('text-3xl font-bold underline')}>Home</p>
    </DefaultLayout>
  );
};
