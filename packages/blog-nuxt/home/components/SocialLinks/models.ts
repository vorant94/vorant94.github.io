import type { IconGlyph } from '~/ui/components/Icon/index.meta';

export interface SocialLink {
  glyph: IconGlyph;
  label: string;
  url: URL;
}

export const socialLinks = [
  {
    glyph: 'linked-in',
    label: 'LinkedIn',
    url: new URL('https://www.linkedin.com/in/vorant94/'),
  },
  {
    glyph: 'github',
    label: 'Github',
    url: new URL('https://github.com/vorant94/'),
  },
  {
    glyph: 'medium',
    label: 'Medium',
    url: new URL('https://vorant94.medium.com/'),
  },
  {
    glyph: 'stack-overflow',
    label: 'Stack Overflow',
    url: new URL('https://stackoverflow.com/users/4995200/vorant94'),
  },
  {
    glyph: 'telegram',
    label: 'Telegram',
    url: new URL('https://t.me/vorant94/'),
  },
  {
    glyph: 'twitter',
    label: 'Twitter / X',
    url: new URL('https://twitter.com/vorant94'),
  },
] as const satisfies SocialLink[];
