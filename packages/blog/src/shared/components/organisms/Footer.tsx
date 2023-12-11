import type { ReactElement } from 'react';
import { PROFILE } from '../../Profile';
import { Icon } from '../atoms/Icon';

export function Footer(): ReactElement {
  return (
    <footer className="flex gap-1 items-center p-4 border-t border-slate-300 dark:border-slate-600">
      <span className="text-gray-500 text-sm">{PROFILE.copyright}</span>

      <div className="flex-1"></div>

      <a
        className="text-slate-500 hover:text-inherit"
        href="/rss.xml"
        target="_blank">
        <Icon className="fa-solid fa-rss" />
      </a>
    </footer>
  );
}
