import type { FC } from 'react';
import type { ProjectModel } from '../models/project.model.js';
import { ProjectTiledGrid } from './ProjectTiledGrid.js';
import { ProjectTiledGridCell } from './ProjectTiledGridCell.js';
import { ProjectTiledGridEmptyCell } from './ProjectTiledGridEmptyCell.js';

export const FeaturedProjects: FC<FeaturedProjectsProps> = function ({
  projects,
}) {
  return (
    <ProjectTiledGrid title={`Featured Projects`}>
      {projects.map((project) => (
        <ProjectTiledGridCell
          project={project}
          key={project.id}
        />
      ))}

      <ProjectTiledGridEmptyCell href="/projects">
        See all
      </ProjectTiledGridEmptyCell>
    </ProjectTiledGrid>
  );
};

export interface FeaturedProjectsProps {
  projects: ProjectModel[];
}
