import type { FC, PropsWithChildren } from "react";
import { Divider } from "../../ui/components/divider.js";
import { Title } from "../../ui/components/title.js";
import { cn } from "../../ui/utils/cn.js";

export const PostTiledList: FC<PropsWithChildren<PostTiledListProps>> = ({
	title,
	children,
}) => (
	<div className={cn("flex flex-col gap-2")}>
		<Divider>
			<Title base="h3">{title}</Title>
		</Divider>

		<menu className={cn("flex flex-col gap-2")}>{children}</menu>
	</div>
);

export interface PostTiledListProps {
	title: string;
}
