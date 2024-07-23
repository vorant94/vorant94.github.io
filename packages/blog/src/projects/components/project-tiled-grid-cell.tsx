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
			"flex h-24 items-center justify-center relative overflow-hidden rounded-md duration-100 border border-transparent group cursor-pointer hover:border-slate-300 hover:dark:border-slate-600 hover:shadow-md hover:scale-105",
		)}
	>
		<Link
			href={project.path}
			className={cn("flex items-center p-3 gap-2")}
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
