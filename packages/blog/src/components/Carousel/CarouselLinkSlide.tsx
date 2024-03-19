import { cn, type Color } from '@digital-garden/utils';
import type { ComponentPropsWithoutRef, FunctionComponent } from 'react';
import { Badge } from '../Badge.tsx';
import { ButtonLink } from '../ButtonLink.tsx';
import { Text } from '../Text.tsx';
import { Title } from '../Title.tsx';
import Styles from './CarouselLinkSlide.module.css';

export const CarouselLinkSlide: LinkSlideComponent = function ({
  href,
  bgImageSrc,
  bgImageSrcDark,
  badgeLabel,
  badgeColor,
  title,
  subTitle,
}) {
  return (
    <ButtonLink
      isOutlined={true}
      style={{
        '--bg-image-url': `url(${bgImageSrc})`,
        '--bg-image-dark-url': `url(${bgImageSrcDark})`,
      }}
      href={href}
      className={cn(
        'p-0 w-56 h-64 flex flex-col shrink-0',
        'bg-[image:var(--bg-image-url)] bg-cover bg-center',
        'rounded-2xl overflow-hidden',
        {
          ['dark:bg-[image:var(--bg-image-dark-url)]']: bgImageSrcDark,
        },
        'group',
      )}>
      <div
        className={cn(
          'bg-black dark:bg-white !bg-opacity-10 flex-1 flex flex-col items-start p-4',
        )}>
        <Badge
          color={badgeColor}
          className="mb-2">
          {badgeLabel}
        </Badge>
        <Title
          base="h6"
          className={cn(Styles.textOutline, 'group-hover:text-inherit')}>
          {title}
        </Title>
        <Text
          base="span"
          className={cn(Styles.textOutline, 'group-hover:text-inherit')}>
          {subTitle}
        </Text>
      </div>
    </ButtonLink>
  );
};

export type LinkSlideComponent = FunctionComponent<LinkSlideProps>;

export interface LinkSlideProps
  extends Pick<ComponentPropsWithoutRef<'a'>, 'href'> {
  bgImageSrc?: string | null;
  bgImageSrcDark?: string | null;
  badgeLabel: string;
  badgeColor: Color;
  title?: string | null;
  subTitle?: string | null;
}
