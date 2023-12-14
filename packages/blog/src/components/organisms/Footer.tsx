import classNames from 'classnames';
import type { ReactElement } from 'react';
import { PROFILE } from '../../shared/profile';
import { THEME } from '../../shared/theme';
import { Icon } from '../atoms/Icon';

export function Footer(): ReactElement {
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
}
