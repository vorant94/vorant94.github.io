import { PROFILE } from '@/shared/profile.ts';
import type { FunctionComponent } from 'react';

export const Seo: FunctionComponent<SeoProps> = function ({
  currentPath,
  title = PROFILE.title,
  image = '/favicon.ico',
  description = PROFILE.description,
  type = 'website',
}) {
  const fullTitle = title === PROFILE.title ? title : `vorant94 | ${title}`;
  const domain = PROFILE.baseUrl.split('/').at(-1);
  const fullUrl = new URL(currentPath, PROFILE.baseUrl).toString();
  const imageSrc = new URL(image, PROFILE.baseUrl).toString();

  return (
    <>
      {/* FACEBOOK */}
      <meta
        property="og:title"
        content={fullTitle}
      />
      <meta
        property="og:description"
        content={description}
      />
      <meta
        property="og:url"
        content={fullUrl}
      />
      <meta
        property="og:image"
        content={imageSrc}
      />
      <meta
        property="og:type"
        content={type}
      />

      {/* TWITTER */}
      <meta
        name="twitter:title"
        content={fullTitle}
      />
      <meta
        name="twitter:description"
        content={description}
      />
      <meta
        property="twitter:url"
        content={fullUrl}
      />
      <meta
        name="twitter:image"
        content={imageSrc}
      />
      <meta
        name="twitter:card"
        content="summary_large_image"
      />
      <meta
        property="twitter:domain"
        content={domain}
      />
    </>
  );
};

export interface SeoProps {
  currentPath: string;
  title?: string;
  image?: string;
  description?: string;
  type?: string;
}
