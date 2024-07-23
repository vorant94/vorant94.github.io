import type { FC } from "react";
import { Caption } from "../../ui/components/caption.js";
import { Link } from "../../ui/components/link.js";
import { ThemedImage } from "../../ui/components/themed-image.js";
import { Title } from "../../ui/components/title.js";
import { cn } from "../../ui/utils/cn.js";
import type { ProjectModel } from "../models/project.model.js";
import { Version } from "./version.js";

export const ProjectTiledGridCell: FC<ProjectTiledGridCellProps> = ({
	project,
}) => (
	<div
		className={cn(
			"group relative flex h-24 cursor-pointer items-center justify-center overflow-hidden rounded-md border border-transparent duration-100 hover:scale-105 hover:border-slate-300 hover:shadow-md hover:dark:border-slate-600",
		)}
	>
		<Link
			href={project.path}
			className={cn("flex items-center gap-2 p-3")}
		>
			<ThemedImage
				className={cn("h-12 w-12 object-scale-down")}
				src={project.matter.logoImage}
				srcDark={project.matter.darkLogoImage}
			/>
			<div className={cn("flex-1")}>
				<Title
					base="h6"
					className={cn("group-hover:text-inherit")}
				>
					{project.matter.name}
				</Title>
				{/* this inline-block removes the inherited text-decoration, since it cannot be simply
          overridden like any other parent css style*/}
				<Caption className="inline-block">{project.matter.slogan}</Caption>
			</div>
		</Link>

		<Version
			status={project.matter.status}
			showStatus={true}
			className={cn(
				"absolute top-0 right-0 rounded-tl-none rounded-tr-none rounded-br-none rounded-bl-2xl",
			)}
		>
			{project.matter.version}
		</Version>
	</div>
);

export interface ProjectTiledGridCellProps {
	project: ProjectModel;
}
