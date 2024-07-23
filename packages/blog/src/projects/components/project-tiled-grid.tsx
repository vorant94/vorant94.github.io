import type { FC, PropsWithChildren } from "react";
import { Divider } from "../../ui/components/divider.js";
import { Title } from "../../ui/components/title.js";
import { cn } from "../../ui/utils/cn.js";

export const ProjectTiledGrid: FC<PropsWithChildren<ProjectTiledGridProps>> = ({
	title,
	children,
}) => (
	<div className={cn("flex flex-col gap-2")}>
		<Divider>
			<Title base="h3">{title}</Title>
		</Divider>

		<div className={cn("grid grid-cols-1 md:grid-cols-2 gap-2")}>
			{children}
		</div>
	</div>
);

export interface ProjectTiledGridProps {
	title: string;
}
