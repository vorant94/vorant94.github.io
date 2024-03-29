import { cn } from '@/core/cn.js';
import type { FC, PropsWithChildren } from 'react';
import { Background } from '../../components/background/index.js';
import { DefaultLayoutFooter } from './footer.js';
import { DefaultLayoutHeader } from './header.js';
import { DefaultLayoutNav } from './nav.js';

export const DefaultLayout: FC<PropsWithChildren<DefaultLayoutProps>> =
  function ({ title, children }) {
    return (
      <html
        className={cn(`dark:[color-scheme:dark]`)}
        lang="en"
        prefix="og: https://ogp.me/ns#">
        <head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
          />

          <link
            rel="icon"
            type="image/svg+xml"
            href="/ui/images/favicon-dark.ico"
            media="(prefers-color-scheme: dark)"
          />
          <link
            rel="icon"
            type="image/svg+xml"
            href="/ui/images/favicon.ico"
            media="(prefers-color-scheme: light)"
          />

          <title>{title}</title>

          <link
            rel="stylesheet"
            href="/style.css"
          />
          <script
            type="module"
            src="/main.js"
            defer></script>
        </head>
        <body
          className={cn(
            'bg-slate-50 dark:bg-slate-900 mx-auto sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl flex min-h-dvh flex-col',
          )}>
          <Background />

          <DefaultLayoutHeader>
            <DefaultLayoutNav />
          </DefaultLayoutHeader>

          <main className={cn('flex flex-1 flex-col gap-2 px-4 py-8')}>
            {children}
          </main>

          <DefaultLayoutFooter />
        </body>
      </html>
    );
  };

export interface DefaultLayoutProps {
  title: string;
}
