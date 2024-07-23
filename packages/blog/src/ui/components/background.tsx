import type { FC } from "react";
import { cn } from "../utils/cn.js";

export const Background: FC = () => (
	<>
		<div
			className={cn(
				"fixed top-0 left-0 h-[134px] w-[134px] rounded-full bg-cyan-500 opacity-50 blur-[150px] md:blur-[350px] lg:h-[300px] lg:w-[300px]",
			)}
		/>
		<div
			className={cn(
				"fixed right-0 bottom-0 h-[134px] w-[134px] rounded-full bg-lime-500 opacity-50 blur-[150px] md:blur-[350px] lg:h-[300px] lg:w-[300px]",
			)}
		/>
	</>
);
