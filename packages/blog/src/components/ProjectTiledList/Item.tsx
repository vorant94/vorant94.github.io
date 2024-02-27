import {
  getChangelogFullPath,
  type Changelog,
} from '@/shared/changelog.helpers';
import {
  PublishedAtFormat,
  formatPublishedAt,
} from '@/shared/collection.helpers';
import {
  getProjectFullPath,
  isProjectDataWithCover,
  projectStatusToBadgeColor,
  projectStatusToLabel,
  type Project,
} from '@/shared/project.helpers';
import { cn } from '@/shared/react.helpers';
import { theme } from '@/shared/tailwind.helpers';
import type { FunctionComponent } from 'react';
import { Badge } from '../Badge';
import { ButtonLink } from '../ButtonLink';
import { Caption } from '../Caption';
import { Card } from '../Card';
import { Divider } from '../Divider';
import { Icon } from '../Icon';
import { Link } from '../Link';
import { Text } from '../Text';
import { Title } from '../Title';

export const Item: ItemComponent = function ({ project, changelogs }) {
  const { data } = project;
  return (
    <Card
      style={
        isProjectDataWithCover(data)
          ? {
              '--bg-image-url': `url(${data.coverImage.src})`,
              '--bg-image-dark-url': `url(${data.coverImageDark?.src})`,
            }
          : {}
      }
      className={cn(
        'flex-1 flex-col',
        'bg-[image:var(--bg-image-url)] bg-right bg-no-repeat bg-[length:auto_200%]',
      )}
      overlay={
        <Card.Overlay
          className={cn(
            'bg-gradient-to-l from-transparent to-60% to-slate-50 dark:to-slate-900',
          )}
        />
      }>
      <div className="flex gap-2 items-center">
        <Link href={getProjectFullPath(project)}>
          <Title className={cn('hover:text-inherit')}>{data.name}</Title>
        </Link>
        <span>•</span>
        <Badge color={projectStatusToBadgeColor[data.status]}>
          {projectStatusToLabel[data.status]}
        </Badge>
      </div>

      <Caption>{data.slogan}</Caption>

      <div className="grid grid-cols-2">
        <div className="flex flex-col">
          <Divider isLeft={false}>
            <Text>Latest Changes</Text>
          </Divider>
          <ul className={cn('flex flex-col divide-y divide-dashed')}>
            {changelogs.map((changelog) => (
              <li className={cn('flex flex-col py-1')}>
                <Link
                  level="sm"
                  href={getChangelogFullPath(changelog)}>
                  {formatPublishedAt(
                    changelog.data.publishedAt,
                    PublishedAtFormat.FULL,
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-2 items-end justify-end self-end">
          {data.productionUrl && (
            <ButtonLink
              level="sm"
              target="_blank"
              href={data.productionUrl}
              isOutlined={true}
              className={cn('p-2 flex gap-1.5 items-center', theme.background)}>
              <Icon glyph="globe" />
              Production
            </ButtonLink>
          )}

          <ButtonLink
            level="sm"
            target="_blank"
            href={data.sourceCodeUrl}
            isOutlined={true}
            className={cn('p-2 flex gap-1.5 items-center', theme.background)}>
            <Icon glyph="github" />
            Source
          </ButtonLink>
        </div>
      </div>
    </Card>
  );
};

export type ItemComponent = FunctionComponent<ItemProps>;

export interface ItemProps {
  project: Project;
  changelogs: Changelog[];
}
