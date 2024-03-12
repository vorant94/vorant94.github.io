import type { Project } from '@/shared/project.helpers.ts';
import type { FunctionComponent } from 'react';
import { ThemedImage } from './ThemedImage.tsx';

export const ProjectFrontmatter: FunctionComponent<ProjectFrontmatterProps> =
  function ({ project }) {
    const { data } = project;

    return (
      <>
        <div className="self-center">
          <ThemedImage
            src={data.demo.src}
            srcDark={data.demoDark?.src}
            alt={'demo'}
          />
        </div>

        <h1>{data.name}</h1>
      </>
    );
  };

export interface ProjectFrontmatterProps {
  project: Project;
}
