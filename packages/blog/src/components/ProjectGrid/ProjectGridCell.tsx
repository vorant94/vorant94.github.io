import { Badge } from '@/components/Badge.tsx';
import { Caption } from '@/components/Caption.tsx';
import { Link } from '@/components/Link.tsx';
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
      <div
        className={cn(
          'flex h-24 items-center justify-center relative overflow-hidden rounded-2xl duration-100 border border-transparent group cursor-pointer',
          'hover:border-slate-300 hover:dark:border-slate-600 hover:shadow-md hover:scale-105',
        )}>
        <Link
          href={href}
          prefetch="hover"
          className={cn('flex items-center p-3 gap-2')}>
          {imageSrc && (
            <ThemedImage
              className={cn('h-12 w-12 object-scale-down')}
              src={imageSrc}
              srcDark={imageSrcDark}
            />
          )}
          {/* adding display: flex here breaks inline-block hack from below */}
          <div className={cn('flex-1')}>
            <Title className={cn('group-hover:text-inherit')}>{title}</Title>
            {/* this inline-block removes the inherited text-decoration, since it cannot be simply
          overridden like any other parent css style*/}
            <Caption className="inline-block">{subTitle}</Caption>
          </div>
        </Link>

        <Badge
          color={badgeColor}
          className={cn(
            'absolute top-0 right-0 rounded-tl-none rounded-tr-none rounded-br-none rounded-bl-2xl',
          )}>
          {badgeLabel}
        </Badge>
      </div>
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
