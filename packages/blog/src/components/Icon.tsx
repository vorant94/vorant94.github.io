import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
  faTelegram,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';
import {
  faBars,
  faGlobe,
  faRss,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { FunctionComponent } from 'react';

// Astro ViewTransitions component breaks React adapter for FontAwesome Icons
// and although CSS adapter is fine with it, I better avoid ViewTransitions since anyway it is very new browser feature
export const Icon: FunctionComponent<IconProps> = function ({ glyph }) {
  return (
    <FontAwesomeIcon
      fixedWidth={true}
      icon={iconGlyphToFaIcon[glyph]!}
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
  'globe',
] as const;
export type IconGlyph = (typeof ICON_GLYPHS)[number];

const iconGlyphToFaIcon = {
  'linked-in': faLinkedin,
  github: faGithub,
  medium: faMedium,
  'stack-overflow': faStackOverflow,
  telegram: faTelegram,
  twitter: faXTwitter,
  rss: faRss,
  menu: faBars,
  close: faXmark,
  globe: faGlobe,
} as const satisfies Record<IconGlyph, IconProp>;
