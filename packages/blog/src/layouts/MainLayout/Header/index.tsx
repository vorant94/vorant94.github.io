import { ButtonLink } from '@/components/ButtonLink.tsx';
import { ThemedImage } from '@/components/ThemedImage';
import { THEME } from '@/shared/theme';
import classNames from 'classnames';
import type { FunctionComponent, PropsWithChildren } from 'react';
import HeaderLogo from './HeaderLogo.webp?url';
import HeaderLogoDark from './HeaderLogoDark.webp?url';

export const Header: FunctionComponent<PropsWithChildren<HeaderProps>> =
  function ({ children }) {
    return (
      <header
        className={classNames(
          'flex gap-1 items-center p-4 border-b',
          ...THEME.border,
        )}>
        <nav>
          <ButtonLink
            href="/"
            className={classNames('!p-0')}>
            <ThemedImage
              src={HeaderLogo}
              srcDark={HeaderLogoDark}
              alt="Logo"
              width="120"
            />
          </ButtonLink>
        </nav>

        <span className="flex-1"></span>

        {children}
      </header>
    );
  };

export interface HeaderProps {}
