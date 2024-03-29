import { DefaultLayout } from '@/ui/layouts/default/index.js';
import { type FC } from 'react';
import { Intro } from '../../components/intro/index.js';
import { SocialLinks } from '../../components/social-links/index.js';
import { StayUpToDate } from '../../components/stay-up-to-date/index.js';

export const AboutTemplate: FC = function () {
  return (
    <DefaultLayout title={`vorant94's Digital Garden`}>
      <Intro />

      <StayUpToDate />

      <SocialLinks />
    </DefaultLayout>
  );
};
