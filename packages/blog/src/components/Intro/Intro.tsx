import { PROFILE } from '@/shared/profile.ts';
import type { FunctionComponent } from 'react';
import { StandOut } from '../StandOut.tsx';
import { Strong } from '../Strong.tsx';
import { Text } from '../Text.tsx';
import { ThemedImage } from '../ThemedImage.tsx';
import IntroLogo from './IntroLogo.webp?url';
import IntroLogoDark from './IntroLogoDark.webp?url';

export const Intro: FunctionComponent = function () {
  return (
    <StandOut className="items-center dark:!border-2 dark:!rounded-lg dark:!border-sky-200 dark:rotate-3 dark:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_rgb(6,182,255),0_0_15px_rgb(6,182,255),0_0_30px_rgb(6,182,255)]">
      <div className="hidden lg:block shrink-0">
        <ThemedImage
          src={IntroLogo}
          srcDark={IntroLogoDark}
          alt="Logo"
          width="80"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Strong>Hi, there, I'm Mordechai! 👋</Strong>
        <Text level="sm">{PROFILE.description}</Text>
        <Text level="sm">
          Make yourself at home, take a sit and grab something to{' '}
          <span className="line-through">drink</span> read
        </Text>
      </div>
    </StandOut>
  );
};
