import type { ComponentPropsWithoutRef, FC, PropsWithChildren } from "react";
import { cn } from "../utils/cn.js";

export const Caption: FC<PropsWithChildren<CaptionPros>> = ({
	children,
	className,
	...rest
}) => (
	<span
		className={cn("text-slate-500 text-sm", className)}
		{...rest}
	>
		{children}
	</span>
);

export interface CaptionPros extends ComponentPropsWithoutRef<"span"> {}
