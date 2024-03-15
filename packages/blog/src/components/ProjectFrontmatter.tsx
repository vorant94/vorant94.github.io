import type { Project } from '@/shared/project.helpers.ts';
import { cn } from '@digital-garden/utils';
import type { FunctionComponent } from 'react';
import { Text } from './Text.tsx';
import { ThemedImage } from './ThemedImage.tsx';
import { Title } from './Title.tsx';

export const ProjectFrontmatter: FunctionComponent<ProjectFrontmatterProps> =
  function ({ project }) {
    const { data } = project;

    return (
      <div className={cn('flex flex-col gap-6')}>
        <div className="self-center">
          <ThemedImage
            src={data.demo.src}
            srcDark={data.demoDark?.src}
            alt={'demo'}
          />
        </div>

        <Title base="h1">{data.name}</Title>

        <Text base="em">{data.slogan}</Text>
      </div>
    );
  };

export interface ProjectFrontmatterProps {
  project: Project;
}
