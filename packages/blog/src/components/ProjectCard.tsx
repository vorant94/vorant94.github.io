import {
  PROJECT_STATUS_TO_LABEL,
  type Project,
} from '@/shared/project.helpers';
import classNames from 'classnames';
import type { FunctionComponent } from 'react';
import { Badge } from './Badge.tsx';
import { Text } from './Text.tsx';
import { Title } from './Title.tsx';

export const ProjectCard: FunctionComponent<ProjectCardProps> = function ({
  project,
}) {
  return (
    <div
      style={{
        '--bg-image-url': `url(${project.data.coverImage?.src})`,
      }}
      className={classNames(
        'w-56 h-64 flex flex-col shrink-0 cursor-pointer',
        'bg-[image:var(--bg-image-url)] bg-cover bg-center rounded-2xl',
      )}>
      <div className="bg-black bg-opacity-10 flex-1 flexflex-col items-start p-4 rounded-2xl">
        <Badge
          color="green"
          className="mb-2">
          {PROJECT_STATUS_TO_LABEL[project.data.status]}
        </Badge>
        <Title>{project.data.name}</Title>
        <Text>{project.data.slogan}</Text>
      </div>
    </div>
  );
};

export interface ProjectCardProps {
  project: Project;
}
