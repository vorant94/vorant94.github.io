import type { FC } from "react";
import { Badge } from "../../ui/components/badge.js";
import { Link } from "../../ui/components/link.js";
import {
	type TailwindColor,
	tailwindColors,
} from "../../ui/types/tailwind-color.js";
import { cn } from "../../ui/utils/cn.js";

export const Tag: FC<TagProps> = ({ tag }) => (
	<Link href={`/tags/${tag}`}>
		<Badge
			className={cn(
				"!inline-block max-w-24 truncate sm:max-w-none lg:max-w-24 xl:max-w-none",
			)}
			color={tagToColor(tag)}
		>
			#{tag}
		</Badge>
	</Link>
);

export interface TagProps {
	tag: string;
}

function tagToColor(value: string): TailwindColor {
	const hash = value
		.split("")
		.map((char) => char.charCodeAt(0))
		.reduce((prev, curr) => prev + curr, 0);

	return tailwindColors[hash % tailwindColors.length] as TailwindColor;
}
