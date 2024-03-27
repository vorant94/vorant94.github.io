import { ButtonLink } from '@/ui/components/ButtonLink/index.js';
import { Icon } from '@/ui/components/Icon/index.js';
import type { FunctionComponent } from 'react';

export const Footer: FunctionComponent<FooterProps> = function () {
  return (
    <footer className="flex gap-1 items-center p-4 border-t border-slate-300 dark:border-slate-600 text-slate-500">
      {/* TODO replace with Text */}
      <span className="text-sm">Mordechai Dror © 2023-present</span>

      <div className="flex-1"></div>

      <ButtonLink
        href="/rss.xml"
        aria-label="RSS feed"
        target="_blank">
        <Icon glyph="rss" />
      </ButtonLink>
    </footer>
  );
};

export interface FooterProps {}
