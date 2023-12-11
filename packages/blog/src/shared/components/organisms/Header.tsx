import type { ReactElement } from 'react';
import { PROFILE } from '../../Profile';
import { Link } from '../atoms/Link';
import headerLogo from './HeaderLogo.svg?url';

export interface HeaderProps {
  currentPath: string;
}

export function Header({ currentPath }: HeaderProps): ReactElement {
  return (
    <header className="flex gap-1 items-center p-4 border-b">
      <nav>
        <a href="/">
          <img
            src={headerLogo}
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
