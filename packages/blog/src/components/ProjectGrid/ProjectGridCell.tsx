import { Badge } from '@/components/Badge.tsx';
import { ButtonLink } from '@/components/ButtonLink.tsx';
import { Caption } from '@/components/Caption.tsx';
import { ThemedImage } from '@/components/ThemedImage.tsx';
import { Title } from '@/components/Title.tsx';
import { cn, type Color } from '@digital-garden/utils';
import type { ComponentPropsWithoutRef, FunctionComponent } from 'react';

export const ProjectGridCell: FunctionComponent<ProjectGridCellProps> =
  function ({
    href,
    imageSrc,
    imageSrcDark,
    title,
    subTitle,
    badgeLabel,
    badgeColor,
  }) {
    return (
      <ButtonLink
        href={href}
        isOutlined={true}
        className={cn(
          'p-3 flex items-center justify-center gap-2 h-24 group relative overflow-hidden',
        )}>
        {imageSrc ? (
          <ThemedImage
            className={cn('w-12')}
            src={imageSrc}
            srcDark={imageSrcDark}
          />
        ) : null}
        <div className={cn('flex-1 flex flex-col')}>
          <Title className={cn('group-hover:text-inherit')}>{title}</Title>

          <Caption>{subTitle}</Caption>
        </div>

        <Badge
          color={badgeColor}
          className={cn(
            'absolute top-0 right-0 rounded-tl-none rounded-tr-none rounded-br-none rounded-bl-2xl',
          )}>
          {badgeLabel}
        </Badge>
      </ButtonLink>
    );
  };

export interface ProjectGridCellProps
  extends Pick<ComponentPropsWithoutRef<'a'>, 'href'> {
  imageSrcDark?: string | null;
  imageSrc?: string | null;
  badgeLabel: string;
  badgeColor: Color;
  title: string;
  subTitle: string;
}
