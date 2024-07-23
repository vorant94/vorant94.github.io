import type { FC, PropsWithChildren } from "react";
import { Background } from "../components/background.js";
import { Meta } from "../components/meta.js";
import { cn } from "../utils/cn.js";

export const CenteredLayout: FC<PropsWithChildren<CenteredLayoutProps>> = ({
	title,
	children,
}) => (
	<html
		className="dark:[color-scheme:dark]"
		lang="en"
		prefix="og: https://ogp.me/ns#"
	>
		{/* Ignore IDE warning about title here, because it is indeed added from inside of Meta*/}
		<head>
			<Meta title={title} />
		</head>
		<body
			className={cn(
				"mx-auto flex min-h-dvh flex-col bg-slate-50 sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl dark:bg-slate-900",
			)}
		>
			<Background />

			<main className="flex flex-1 flex-col items-center justify-center">
				{children}
			</main>
		</body>
	</html>
);

export interface CenteredLayoutProps {
	title?: string;
}
