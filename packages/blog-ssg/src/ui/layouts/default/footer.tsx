import type { FunctionComponent } from 'react';
import { ButtonLink } from '../../components/button-link/index.js';
import { Icon } from '../../components/icon/index.js';

export const DefaultLayoutFooter: FunctionComponent<FooterProps> = function () {
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
