import {
  getChangelogFullPath,
  type Changelog,
} from '@/shared/changelog.helpers.ts';
import {
  getProjectFullPath,
  projectStatusToBadgeColor,
  projectStatusToLabel,
  type Project,
} from '@/shared/project.helpers.ts';
import { cn } from '@digital-garden/utils';
import type { FunctionComponent } from 'react';
import { Badge } from '../Badge.tsx';
import { ButtonLink } from '../ButtonLink.tsx';
import { Caption } from '../Caption.tsx';
import { Card } from '../Card/Card.tsx';
import { CardOverlay } from '../Card/CardOverlay.tsx';
import { Divider } from '../Divider.tsx';
import { Icon } from '../Icon.tsx';
import { Link } from '../Link.tsx';
import { Text } from '../Text.tsx';
import { Title } from '../Title.tsx';

export const ProjectTiledListItem: FunctionComponent<ProjectTiledListItemProps> =
  function ({ project, changelogs }) {
    const { data } = project;
    const badgeLabel = `${projectStatusToLabel[data.status]}${data.version ? ` v${data.version}` : ''}`;

    return (
      <Card
        style={{
          '--bg-image-url': `url(${data.logo.src})`,
          '--bg-image-dark-url': `url(${data.logoDark?.src})`,
        }}
        className={cn(
          'flex-1 flex-col',
          'bg-[image:var(--bg-image-url)] dark:bg-[image:var(--bg-image-dark-url)] bg-right bg-no-repeat bg-[length:auto_200%]',
        )}
        overlay={
          <CardOverlay
            className={cn(
              'bg-gradient-to-l from-transparent to-60% to-slate-50 dark:to-slate-900',
            )}
          />
        }>
        <div className="flex gap-2 items-center">
          <Link href={getProjectFullPath(project)}>
            <Title
              base="h6"
              className={cn('hover:text-inherit')}>
              {data.name}
            </Title>
          </Link>
          <span>•</span>
          <Badge color={projectStatusToBadgeColor[data.status]}>
            {badgeLabel}
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
                    v{changelog.data.version}
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
                className={cn('dg-background p-2 flex gap-1.5 items-center')}>
                <Icon glyph="globe" />
                Production
              </ButtonLink>
            )}

            <ButtonLink
              level="sm"
              target="_blank"
              href={data.sourceCodeUrl}
              isOutlined={true}
              className={cn('dg-background p-2 flex gap-1.5 items-center')}>
              <Icon glyph="github" />
              Source
            </ButtonLink>
          </div>
        </div>
      </Card>
    );
  };

export interface ProjectTiledListItemProps {
  project: Project;
  changelogs: Changelog[];
}
