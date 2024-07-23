import type { FC } from "react";
import { Divider } from "../../ui/components/divider.js";
import { Link } from "../../ui/components/link.js";
import { Text } from "../../ui/components/text.js";
import { Title } from "../../ui/components/title.js";
import { cn } from "../../ui/utils/cn.js";

export const StayUpToDate: FC = () => (
	<div className={cn("flex flex-col gap-2")}>
		<Divider>
			<Title base="h3">Stay up to date</Title>
		</Divider>

		<Text base="span">
			If you wish to be up to date with new posts you can{" "}
			<Link
				href="/rss.xml"
				target="_blank"
			>
				subscribe with RSS
			</Link>
		</Text>

		<Text base="span">
			There will also be an email newsletter somewhere in the future
		</Text>
	</div>
);
