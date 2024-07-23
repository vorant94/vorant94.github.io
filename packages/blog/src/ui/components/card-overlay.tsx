import type { ComponentPropsWithoutRef, FC } from "react";
import { cn } from "../utils/cn.js";

export const CardOverlay: FC<OverlayProps> = ({ className, ...rest }) => (
	<div
		className={cn(
			"absolute top-0 left-0 h-full w-full rounded-md p-5",
			className,
		)}
		{...rest}
	/>
);

export interface OverlayProps extends ComponentPropsWithoutRef<"div"> {}
