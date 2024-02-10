import { ButtonLink } from '@/components/ButtonLink.tsx';
import { Icon } from '@/components/Icon';
import { PROFILE } from '@/shared/profile';
import { THEME } from '@/shared/theme';
import classNames from 'classnames';
import type { FunctionComponent } from 'react';

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
