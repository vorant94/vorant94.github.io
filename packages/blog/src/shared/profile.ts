import type { IconGlyph } from '../components/atoms/Icon';

export const PROFILE: Profile = {
  baseUrl: 'https://www.vorant94.io',
  title: `vorant94's Digital Garden`,
  description: `Welcome to my digital garden, here I write about all sorts of things (mostly about technologies, a little bit on gaming, traveling and self-reflecting)`,
  email: 'vorant94@gmail.com',
  copyright: 'Mordechai Dror © 2021-present',
  navLinks: [
    { label: '👨‍💻 About', url: '/about' },
    { label: '📒 Posts', url: '/posts' },
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
};

export interface Profile {
  readonly baseUrl: string;
  readonly title: string;
  readonly description: string;
  readonly email: string;
  readonly copyright: string;
  readonly navLinks: NavLink[];
  readonly socialLinks: SocialLink[];
}

export interface NavLink {
  readonly label: string;
  readonly url: string;
}

export interface SocialLink {
  readonly glyph: IconGlyph;
  readonly label: string;
  readonly url: URL;
}
