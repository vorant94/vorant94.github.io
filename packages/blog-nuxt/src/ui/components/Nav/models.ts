import type { NavLinkItem } from '~/components/NavLink/models';

export const navItems = [
  { label: '👨‍💻 About', url: '/about' },
  { label: '✏️ Posts', url: '/posts' },
  { label: '🏗️ Projects', url: '/projects' },
] as const satisfies NavLinkItem[];
