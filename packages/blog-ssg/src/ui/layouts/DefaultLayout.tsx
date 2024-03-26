import type { FunctionComponent, VNode } from 'preact';

export const DefaultLayout: FunctionComponent<DefaultLayoutProps> = function ({
  title,
  body,
}) {
  return (
    <html>
      <head>
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
