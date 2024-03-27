import { cn } from '@/core/cn.js';
import { Background } from '@/ui/components/Background/index.js';
import { Footer } from '@/ui/layouts/DefaultLayout/Footer.js';
import type { FC, PropsWithChildren } from 'react';

export const DefaultLayout: FC<PropsWithChildren<DefaultLayoutProps>> =
  function ({ title, children }) {
    return (
      <html
        className={cn(`class="dark:[color-scheme:dark]`)}
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
            href="/favicon-dark.ico"
            media="(prefers-color-scheme: dark)"
          />
          <link
            rel="icon"
            type="image/svg+xml"
            href="/favicon.ico"
            media="(prefers-color-scheme: light)"
          />

          <title>{title}</title>

          <link
            rel="stylesheet"
            href="/assets/style.css"
          />
          <script
            type="module"
            src="/assets/main.js"
            defer></script>
        </head>
        <body
          className={cn(
            'bg-slate-50 dark:bg-slate-900 mx-auto sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl flex min-h-dvh flex-col',
          )}>
          <Background />

          <main className={cn('flex flex-1 flex-col gap-2 px-4 py-8')}>
            {children}
          </main>

          <Footer />
        </body>
      </html>
    );
  };

export interface DefaultLayoutProps {
  title: string;
}
