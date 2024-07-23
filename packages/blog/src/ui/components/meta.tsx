import type { FC } from "react";
import { getFullTitle } from "../utils/get-full-title.js";

export const Meta: FC<MetaProps> = ({ title }) => {
	const fullTitle = getFullTitle(title);

	return (
		<>
			<meta charSet="UTF-8" />
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1"
			/>

			<link
				rel="icon"
				type="image/svg+xml"
				href="/ui/favicon-dark.ico"
				media="(prefers-color-scheme: dark)"
			/>
			<link
				rel="icon"
				type="image/svg+xml"
				href="/ui/favicon.ico"
				media="(prefers-color-scheme: light)"
			/>
			<link
				rel="sitemap"
				href="/sitemap.xml"
			/>

			<title>{fullTitle}</title>

			<link
				rel="stylesheet"
				href="/client/style.css"
			/>
			<script
				type="module"
				src="/client/main.js"
				defer
			/>
		</>
	);
};

export interface MetaProps {
	title?: string;
}
