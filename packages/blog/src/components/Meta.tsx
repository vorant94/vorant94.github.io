import { PROFILE } from '@/shared/profile';
import type { FunctionComponent } from 'react';

export const Meta: FunctionComponent<MetaProps> = function ({
  title = PROFILE.title,
}) {
  const fullTitle = title === PROFILE.title ? title : `vorant94 | ${title}`;

  return (
    <>
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
      <link
        rel="sitemap"
        href="/sitemap-index.xml"
      />

      <title>{fullTitle}</title>
    </>
  );
};

export interface MetaProps {
  title?: string;
}
