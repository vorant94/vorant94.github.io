import type { ComponentPropsWithoutRef, FC, PropsWithChildren } from "react";
import { Link } from "../../ui/components/link.js";
import { cn } from "../../ui/utils/cn.js";

export const ProjectTiledGridEmptyCell: FC<
	PropsWithChildren<ProjectTiledGridCellProps>
> = ({ href, children }) => (
	<div
		className={cn(
			"group relative flex h-24 cursor-pointer items-center justify-center overflow-hidden rounded-md border border-transparent duration-100 hover:scale-105 hover:border-slate-300 hover:shadow-md hover:dark:border-slate-600",
		)}
	>
		<Link
			href={href}
			className={cn("flex items-center p-3")}
		>
			{children}
		</Link>
	</div>
);

export interface ProjectTiledGridCellProps
	extends Pick<ComponentPropsWithoutRef<"a">, "href"> {}
