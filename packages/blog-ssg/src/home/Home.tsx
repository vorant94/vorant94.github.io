import { cn } from '@/core/cn.js';
import { DefaultLayout } from '@/ui/layouts/DefaultLayout/index.js';
import type { FunctionComponent } from 'preact';

export const Home: FunctionComponent<HomeProps> = function () {
  return (
    <DefaultLayout
      title={`vorant94's Digital Garden`}
      body={<p class={cn('text-3xl font-bold underline')}>Hello World!</p>}
    />
  );
};

export interface HomeProps {}
