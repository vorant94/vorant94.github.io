import classNames from 'classnames';
import type { FunctionComponent } from 'react';
import { PROFILE } from '../../shared/profile';
import { THEME } from '../../shared/theme';
import { Icon } from '../atoms/Icon';

export const Footer: FunctionComponent = function () {
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
