import { ButtonLink } from '@/components/ButtonLink.tsx';
import { ThemedImage } from '@/components/ThemedImage.tsx';
import { cn } from '@digital-garden/utils';
import type { FunctionComponent, PropsWithChildren } from 'react';
import HeaderLogo from './HeaderLogo.webp?url';
import HeaderLogoDark from './HeaderLogoDark.webp?url';

export const Header: FunctionComponent<PropsWithChildren<HeaderProps>> =
  function ({ children }) {
    return (
      <header
        className={cn('flex gap-1 items-center p-4 border-b', 'va-border')}>
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
