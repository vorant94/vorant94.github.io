import type { ReactElement } from 'react';
import { PROFILE } from '../../Profile';
import { Body } from '../atoms/Body';
import { Strong } from '../atoms/Strong.tsx';
import { ThemedImage } from '../atoms/ThemedImage';
import { StandOut } from '../molecules/StandOut';
import IntroLogo from './IntroLogo.webp?url';
import IntroLogoDark from './IntroLogoDark.webp?url';

export function Intro(): ReactElement {
  return (
    <StandOut className="items-center dark:!border-2 dark:!rounded-lg dark:!border-sky-200 dark:rotate-3 dark:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]">
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
        <Body className="text-sm font-light">{PROFILE.description}</Body>
        <Body className="text-sm font-light">
          Make yourself at home, take a sit and grab something to{' '}
          <span className="line-through">drink</span> read
        </Body>
      </div>
    </StandOut>
  );
}
