import { Badge } from '@/components/Badge.tsx';
import { ButtonLink } from '@/components/ButtonLink.tsx';
import { Icon } from '@/components/Icon.tsx';
import {
  projectStatusToBadgeColor,
  projectStatusToLabel,
  type Project,
} from '@/shared/project.helpers.ts';
import { cn } from '@digital-garden/utils';
import type { FunctionComponent } from 'react';
import { Text } from './Text.tsx';
import { ThemedImage } from './ThemedImage.tsx';
import { Title } from './Title.tsx';

export const ProjectFrontmatter: FunctionComponent<ProjectFrontmatterProps> =
  function ({ project }) {
    const { data } = project;
    const badgeLabel = `${projectStatusToLabel[data.status]}${data.version ? ` v${data.version}` : ''}`;

    return (
      <div className={cn('flex flex-col items-center gap-6')}>
        <Title base="h1">{data.name}</Title>

        <Badge color={projectStatusToBadgeColor[data.status]}>
          {badgeLabel}
        </Badge>

        <ThemedImage
          src={data.demo.src}
          srcDark={data.demoDark?.src}
          alt={'demo'}
        />

        <Text base="em">{data.slogan}</Text>

        <ul className={cn('flex gap-2')}>
          {data.productionUrl && (
            <li>
              <ButtonLink
                level="sm"
                target="_blank"
                href={data.productionUrl}
                isOutlined={true}
                className={cn('dg-background p-2 flex gap-1.5 items-center')}>
                <Icon glyph="globe" />
                Production
              </ButtonLink>
            </li>
          )}

          <li>
            <ButtonLink
              level="sm"
              target="_blank"
              href={data.sourceCodeUrl}
              isOutlined={true}
              className={cn('dg-background p-2 flex gap-1.5 items-center')}>
              <Icon glyph="github" />
              Source
            </ButtonLink>
          </li>
        </ul>
      </div>
    );
  };

export interface ProjectFrontmatterProps {
  project: Project;
}
