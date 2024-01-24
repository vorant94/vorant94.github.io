import classNames from 'classnames';
import type { FunctionComponent } from 'react';
import { Icon } from '../../components';
import { PROFILE, THEME } from '../../shared';

export const Footer: FunctionComponent<FooterProps> = function () {
  return (
    <footer
      className={classNames(
        'flex gap-1 items-center p-4 border-t',
        ...THEME.border,
        THEME.secondaryText,
      )}>
      <span className="text-sm">{PROFILE.copyright}</span>

      <div className="flex-1"></div>

      <a
        href="/rss.xml"
        target="_blank">
        <Icon glyph="rss" />
      </a>
    </footer>
  );
};

export interface FooterProps {}
