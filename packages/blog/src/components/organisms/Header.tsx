import classNames from 'classnames';
import type { ReactElement } from 'react';
import { PROFILE } from '../../shared/profile';
import { THEME } from '../../shared/theme';
import { NavLink } from '../atoms/NavLink';
import { ThemedImage } from '../atoms/ThemedImage';
import HeaderLogo from './HeaderLogo.webp?url';
import HeaderLogoDark from './HeaderLogoDark.webp?url';

export function Header({ currentPath }: HeaderProps): ReactElement {
  return (
    <header
      className={classNames(
        'flex gap-1 items-center p-4 border-b',
        ...THEME.border,
      )}>
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

      <ul className="flex gap-3 md:gap-4 lg:gap-6">
        {PROFILE.navLinks.map((link) => (
          <li
            className="text-sm"
            key={link.url}>
            <NavLink
              href={link.url}
              isActive={currentPath === link.url}>
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </header>
  );
}

export interface HeaderProps {
  currentPath: string;
}
