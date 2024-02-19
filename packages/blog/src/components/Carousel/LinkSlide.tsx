import type { Color } from '@/shared/theme';
import classNames from 'classnames';
import type { ComponentPropsWithoutRef, FunctionComponent } from 'react';
import { Badge } from '../Badge';
import { ButtonLink } from '../ButtonLink';
import { Text } from '../Text';
import { Title } from '../Title';
import Styles from './LinkSlide.module.css';

export const LinkSlide: LinkSlideComponent = function ({
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
      className={classNames(
        '!p-0 w-56 h-64 flex flex-col shrink-0',
        'bg-[image:var(--bg-image-url)] bg-cover bg-center',
        'rounded-2xl overflow-hidden',
        {
          ['dark:bg-[image:var(--bg-image-dark-url)]']: bgImageSrcDark,
        },
      )}>
      <div
        className={classNames(
          'bg-black bg-opacity-10 flex-1 flex flex-col items-start p-4',
        )}>
        <Badge
          color={badgeColor}
          className="mb-2">
          {badgeLabel}
        </Badge>
        <Title className={classNames(Styles.textOutline)}>{title}</Title>
        <Text className={classNames(Styles.textOutline)}>{subTitle}</Text>
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
