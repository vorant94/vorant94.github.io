import type { ReactElement } from 'react';
import { PROFILE } from '../../Profile';
import { Link } from '../atoms/Link';
import { ThemedImage } from '../atoms/ThemedImage.tsx';
import HeaderLogo from './HeaderLogo.webp?url';
import HeaderLogoDark from './HeaderLogoDark.webp?url';

export interface HeaderProps {
  currentPath: string;
}

export function Header({ currentPath }: HeaderProps): ReactElement {
  return (
    <header className="flex gap-1 items-center p-4 border-b border-slate-300 dark:border-slate-600">
      <nav>
        <a href="/">
          <ThemedImage
            src={HeaderLogo}
            srcDark={HeaderLogoDark}
            alt="Logo"
            width="120"
          />
        </a>
      </nav>

      <span className="flex-1"></span>

      <ul className="flex gap-3">
        {PROFILE.navLinks.map((link) => (
          <li
            className="text-sm"
            key={link.url}>
            <Link
              href={link.url}
              isActive={currentPath === link.url}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
}
