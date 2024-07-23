import type {
	ComponentPropsWithoutRef,
	FC,
	PropsWithChildren,
	ReactElement,
} from "react";
import { cn } from "../utils/cn.js";
import type { CardOverlay } from "./card-overlay.js";

export const Card: FC<PropsWithChildren<CardProps>> = ({
	children,
	overlay,
	className,
	...rest
}) => (
	<div
		className={cn(
			"relative flex gap-3 rounded-md border border-slate-300 bg-slate-50 p-5 dark:border-slate-600 dark:bg-slate-900",
			className,
		)}
		{...rest}
	>
		{overlay}
		{children}
	</div>
);

export interface CardProps extends ComponentPropsWithoutRef<"div"> {
	overlay?: ReactElement<ReturnType<typeof CardOverlay>>;
}
