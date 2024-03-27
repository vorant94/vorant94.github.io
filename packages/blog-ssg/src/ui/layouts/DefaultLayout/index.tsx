import { cn } from '@/core/cn.js';
import { assets } from '@/core/generators/generate-assets.js';
import { URL } from 'node:url';
import type { FunctionComponent, VNode } from 'preact';

export const DefaultLayout: FunctionComponent<DefaultLayoutProps> = function ({
  title,
  body,
}) {
  assets.set(new URL('./favicon.ico', import.meta.url).pathname, '');
  assets.set(new URL('./favicon-dark.ico', import.meta.url).pathname, '');

  return (
    <html
      class={cn(`class="dark:[color-scheme:dark]`)}
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
      </head>
      <body>{body}</body>
    </html>
  );
};

export interface DefaultLayoutProps {
  title: string;
  body: VNode;
}
