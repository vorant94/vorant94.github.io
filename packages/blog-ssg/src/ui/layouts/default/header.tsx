import { cn } from '@/core/cn.js';
import type { FunctionComponent, PropsWithChildren } from 'react';
import { ButtonLink } from '../../components/button-link/index.js';
import { ThemedImage } from '../../components/themed-image/index.js';

export const DefaultLayoutHeader: FunctionComponent<PropsWithChildren> =
  function ({ children }) {
    return (
      <header
        className={cn('flex gap-1 items-center p-4 border-b', 'dg-border')}>
        <nav>
          <ButtonLink
            href="/"
            className={cn('!p-0')}>
            <ThemedImage
              src="/images/logo.webp"
              srcDark="/images/logo-dark.webp"
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
