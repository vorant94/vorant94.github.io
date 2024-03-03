import { ButtonLink } from '@/components/ButtonLink.tsx';
import { Icon } from '@/components/Icon.tsx';
import { profile } from '@/shared/profile.ts';
import { cn } from '@digital-garden/utils';
import type { FunctionComponent } from 'react';

export const Footer: FunctionComponent<FooterProps> = function () {
  return (
    <footer
      className={cn(
        'flex gap-1 items-center p-4 border-t',
        'va-border va-secondary-text',
      )}>
      <span className="text-sm">{profile.copyright}</span>

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
