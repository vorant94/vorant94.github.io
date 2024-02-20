import { ButtonLink } from '@/components/ButtonLink';
import { ThemedImage } from '@/components/ThemedImage';
import { cn } from '@/shared/react.helpers';
import { theme } from '@/shared/tailwind.helpers';
import type { FunctionComponent, PropsWithChildren } from 'react';
import HeaderLogo from './HeaderLogo.webp?url';
import HeaderLogoDark from './HeaderLogoDark.webp?url';

export const Header: FunctionComponent<PropsWithChildren<HeaderProps>> =
  function ({ children }) {
    return (
      <header
        className={cn('flex gap-1 items-center p-4 border-b', ...theme.border)}>
        <nav>
          <ButtonLink
            href="/"
            className={cn('!p-0')}>
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
