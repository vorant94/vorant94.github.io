import type { ReactElement } from 'react';
import { PROFILE } from '../../Profile';
import { Body } from '../atoms/Body';
import { StandOut } from '../molecules/StandOut';
import introLogo from './IntroLogo.webp?url';

export function Intro(): ReactElement {
  return (
    <StandOut className="items-center">
      <div className="hidden lg:block shrink-0">
        <img
          src={introLogo}
          alt="Logo"
          width="80"
        />
      </div>

      <div className="flex flex-col gap-2">
        <span className="font-semibold">Hi, there, I'm Mordechai! 👋</span>
        <Body>{PROFILE.description}</Body>
        <Body>
          Make yourself at home, take a sit and grab something to
          <span className="line-through">drink</span>
          read
        </Body>
      </div>
    </StandOut>
  );
}
