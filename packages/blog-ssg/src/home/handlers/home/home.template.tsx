import { DefaultLayout } from '@/ui/layouts/default/index.js';
import { type FC } from 'react';
import { Intro } from '../../components/intro/index.js';

export const HomeTemplate: FC = function () {
  return (
    <DefaultLayout title={`vorant94's Digital Garden`}>
      <Intro />
    </DefaultLayout>
  );
};
