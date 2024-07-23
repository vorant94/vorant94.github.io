import type { FC, PropsWithChildren } from "react";
import { cn } from "../utils/cn.js";

export const Divider: FC<PropsWithChildren<DividerProps>> = ({
	isRight = true,
	isLeft = true,
	children,
}) => (
	<div className="relative flex items-center py-5">
		{isLeft && (
			<div
				className={cn(
					"flex-grow border-slate-300 border-t dark:border-slate-600",
				)}
			/>
		)}
		<div
			className={cn("flex-shrink", {
				"ml-4": isLeft,
				"mr-4": isRight,
			})}
		>
			{children}
		</div>
		{isRight && (
			<div
				className={cn(
					"flex-grow border-slate-300 border-t dark:border-slate-600",
				)}
			/>
		)}
	</div>
);

export interface DividerProps {
	isLeft?: boolean;
	isRight?: boolean;
}
