import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
  faTelegram,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faBars, faRss, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { FunctionComponent } from 'react';

export const Icon: FunctionComponent<IconProps> = function ({ glyph }) {
  return (
    <FontAwesomeIcon
      fixedWidth={true}
      icon={ICON_GLYPH_TO_FA_ICON[glyph]!}
    />
  );
};

export interface IconProps {
  glyph: IconGlyph;
}

export const ICON_GLYPHS = [
  'linked-in',
  'github',
  'medium',
  'stack-overflow',
  'telegram',
  'twitter',
  'rss',
  'menu',
  'close',
] as const;
export type IconGlyph = (typeof ICON_GLYPHS)[number];

const ICON_GLYPH_TO_FA_ICON: Record<IconGlyph, IconProp> = {
  'linked-in': faLinkedin,
  github: faGithub,
  medium: faMedium,
  'stack-overflow': faStackOverflow,
  telegram: faTelegram,
  twitter: faXTwitter,
  rss: faRss,
  menu: faBars,
  close: faXmark,
};
