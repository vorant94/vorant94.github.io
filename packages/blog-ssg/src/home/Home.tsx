import { cn } from '@/core/cn.js';
import { DefaultLayout } from '@/ui/layouts/DefaultLayout/index.js';
import { type FC } from 'react';

export const Home: FC<HomeProps> = function () {
  return (
    <DefaultLayout title={`vorant94's Digital Garden`}>
      <p className={cn('text-3xl font-bold underline')}>Hello World!</p>
    </DefaultLayout>
  );
};

export interface HomeProps {}
