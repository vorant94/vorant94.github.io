import type { IconGlyph } from '@/components/Icon';

export const profile = {
  title: `vorant94's Digital Garden`,
  description: `Welcome to my digital garden, here I write about all sorts of things (mostly about technologies, a little bit on gaming, traveling and self-reflecting)`,
  email: 'vorant94@pm.me',
  copyright: 'Mordechai Dror © 2023-present',
  navLinks: [
    { label: '👨‍💻 About', url: '/about' },
    { label: '✏️ Posts', url: '/posts' },
    { label: '🏗️ Projects', url: '/projects' },
  ],
  socialLinks: [
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
  ],
} as const satisfies Profile;

export interface Profile {
  title: string;
  description: string;
  email: string;
  copyright: string;
  navLinks: ProfileNavLink[];
  socialLinks: ProfileSocialLink[];
}

export interface ProfileNavLink {
  label: string;
  url: string;
}

export interface ProfileSocialLink {
  glyph: IconGlyph;
  label: string;
  url: URL;
}
