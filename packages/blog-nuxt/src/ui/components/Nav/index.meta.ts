import type { NavLinkItem } from '~/ui/components/Nav/Link.meta';

export const navItems = [
  { label: '👨‍💻 About', url: '/about' },
  { label: '✏️ Posts', url: '/posts' },
  { label: '🏗️ Projects', url: '/projects' },
] as const satisfies NavLinkItem[];
