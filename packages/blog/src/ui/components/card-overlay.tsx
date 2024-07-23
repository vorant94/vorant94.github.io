import type { ComponentPropsWithoutRef, FC } from "react";
import { cn } from "../utils/cn.js";

export const CardOverlay: FC<OverlayProps> = ({ className, ...rest }) => (
	<div
		className={cn(
			"rounded-md p-5 absolute left-0 top-0 w-full h-full",
			className,
		)}
		{...rest}
	/>
);

export interface OverlayProps extends ComponentPropsWithoutRef<"div"> {}
