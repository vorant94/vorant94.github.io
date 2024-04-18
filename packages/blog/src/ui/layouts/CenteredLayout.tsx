import type { FC, PropsWithChildren } from 'react';
import { Background } from '../components/Background.js';
import { Meta } from '../components/Meta.js';
import { cn } from '../utils/cn.js';

export const CenteredLayout: FC<PropsWithChildren<CenteredLayoutProps>> =
  function ({ title, children }) {
    return (
      <html
        className="dark:[color-scheme:dark]"
        lang="en"
        prefix="og: https://ogp.me/ns#">
        {/* Ignore IDE warning about title here, because it is indeed added from inside of Meta*/}
        <head>
          <Meta title={title} />
        </head>
        <body
          className={cn(
            'bg-slate-50 dark:bg-slate-900 mx-auto sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl flex min-h-dvh flex-col',
          )}>
          <Background />

          <main className="flex flex-1 flex-col items-center justify-center">
            {children}
          </main>
        </body>
      </html>
    );
  };

export interface CenteredLayoutProps {
  title?: string;
}
