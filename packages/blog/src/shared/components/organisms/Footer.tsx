import '@fortawesome/fontawesome-free/css/fontawesome.css';
import '@fortawesome/fontawesome-free/css/solid.css';
import type { ReactElement } from 'react';
import { PROFILE } from '../../Profile';

export function Footer(): ReactElement {
  return (
    <footer className="flex gap-1 items-center p-4 border-t">
      <span className="text-gray-500 text-sm">{PROFILE.copyright}</span>

      <div className="flex-1"></div>

      <a
        className="text-gray-500 hover:text-inherit"
        href="/rss.xml"
        target="_blank">
        <i className="fa-solid fa-rss"></i>
      </a>
    </footer>
  );
}
