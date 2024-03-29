import { cn } from '@/core/cn.js';
import type { FunctionComponent, PropsWithChildren } from 'react';
import { ButtonLink } from '../../components/button-link/index.js';
import { ThemedImage } from '../../components/themed-image/index.js';

export const DefaultLayoutHeader: FunctionComponent<PropsWithChildren> =
  function ({ children }) {
    return (
      <header
        className={cn(
          'flex gap-1 items-center p-4 border-b border-slate-300 dark:border-slate-600',
        )}>
        <nav>
          <ButtonLink
            href="/"
            className={cn('!p-0')}>
            <ThemedImage
              src="/ui/images/header-logo.webp"
              srcDark="/ui/images/header-logo-dark.webp"
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
