import type { FC, PropsWithChildren } from "react";
import { Divider } from "../../ui/components/divider.js";
import { Title } from "../../ui/components/title.js";
import { cn } from "../../ui/utils/cn.js";

export const ProjectTiledList: FC<PropsWithChildren<ProjectTiledListProps>> = ({
	children,
	title,
}) => (
	<div className={cn("flex flex-col gap-2")}>
		<Divider isLeft={false}>
			<Title base="h3">{title}</Title>
		</Divider>

		<menu className={cn("flex flex-col gap-4")}>{children}</menu>
	</div>
);

export interface ProjectTiledListProps {
	title: string;
}
