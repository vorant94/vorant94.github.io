import '@fortawesome/fontawesome-free/css/brands.css';
import '@fortawesome/fontawesome-free/css/fontawesome.css';
import '@fortawesome/fontawesome-free/css/solid.css';
import classNames from 'classnames';
import type { ReactElement } from 'react';

export function Icon({ glyph }: IconPros): ReactElement {
  return (
    <i
      className={classNames(
        {
          'fa-brands': ICON_BRAND_GLYPHS.includes(glyph as IconBrandGlyph),
          'fa-solid': ICON_SOLID_GLYPHS.includes(glyph as IconSolidGlyph),
        },
        iconGlyphToFaIcon[glyph],
      )}></i>
  );
}

export interface IconPros {
  glyph: IconGlyph;
}

export const ICON_BRAND_GLYPHS = [
  'linked-in',
  'github',
  'medium',
  'stack-overflow',
  'telegram',
  'twitter',
] as const;
export type IconBrandGlyph = (typeof ICON_BRAND_GLYPHS)[number];

export const ICON_SOLID_GLYPHS = ['rss'] as const;
export type IconSolidGlyph = (typeof ICON_SOLID_GLYPHS)[number];

export type IconGlyph = IconBrandGlyph | IconSolidGlyph;

const iconGlyphToFaIcon: Record<IconGlyph, string> = {
  'linked-in': 'fa-linkedin-in',
  github: 'fa-github',
  medium: 'fa-medium',
  'stack-overflow': 'fa-stack-overflow',
  telegram: 'fa-telegram',
  twitter: 'fa-x-twitter',
  rss: 'fa-rss',
};
