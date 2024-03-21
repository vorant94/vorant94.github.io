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

export const iconGlyphs = [
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
export type IconGlyph = (typeof iconGlyphs)[number];

export const iconGlyphToFaIcon = {
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
