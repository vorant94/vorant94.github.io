import type { FC } from "react";
import type { ProjectModel } from "../models/project.model.js";
import { ProjectTiledGridCell } from "./project-tiled-grid-cell.js";
import { ProjectTiledGridEmptyCell } from "./project-tiled-grid-empty-cell.js";
import { ProjectTiledGrid } from "./project-tiled-grid.js";

export const FeaturedProjects: FC<FeaturedProjectsProps> = ({ projects }) => (
	<ProjectTiledGrid title={"Featured Projects"}>
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

export interface FeaturedProjectsProps {
	projects: Array<ProjectModel>;
}
