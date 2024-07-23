import type { FC, PropsWithChildren } from "react";
import { cn } from "../utils/cn.js";
import { Divider } from "./divider.js";
import { Title } from "./title.js";

export const ArchiveList: FC<PropsWithChildren<ArchiveListProps>> = ({
	title,
	children,
}) => (
	<div className={cn("flex flex-col gap-2")}>
		{title && (
			<Divider isLeft={false}>
				<Title base="h3">{title}</Title>
			</Divider>
		)}
		<menu
			className={cn(
				"flex flex-col divide-y divide-dashed divide-slate-300 dark:divide-slate-600",
			)}
		>
			{children}
		</menu>
	</div>
);

export interface ArchiveListProps {
	title?: string;
}
