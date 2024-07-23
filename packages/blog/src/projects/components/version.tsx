import type { ComponentPropsWithoutRef, FC, PropsWithChildren } from "react";
import { Badge } from "../../ui/components/badge.js";
import type { TailwindColor } from "../../ui/types/tailwind-color.js";
import {
	projectStatusToLabel,
	type ProjectStatus,
} from "../models/project.model.js";

export const Version: FC<PropsWithChildren<VersionProps>> = ({
	status = "live",
	showStatus,
	children,
	...rest
}) => (
	<Badge
		color={projectStatusToBadgeColor[status]}
		{...rest}
	>
		{showStatus && projectStatusToLabel[status]} {children}
	</Badge>
);

export interface VersionProps
	extends Omit<ComponentPropsWithoutRef<"span">, "color"> {
	status?: ProjectStatus;
	showStatus?: boolean;
}

const projectStatusToBadgeColor = {
	concept: "neutral",
	mvp: "yellow",
	live: "green",
	freezed: "blue",
	closed: "indigo",
} as const satisfies Record<ProjectStatus, TailwindColor>;
