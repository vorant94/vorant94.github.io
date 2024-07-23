import type { ComponentPropsWithoutRef, FC, PropsWithChildren } from "react";
import { Link } from "../../ui/components/link.js";
import { cn } from "../../ui/utils/cn.js";

export const PostTiledListEmptyItem: FC<
	PropsWithChildren<PostTiledListEmptyItemProps>
> = ({ href, children }) => (
	<li className={cn("self-center")}>
		<Link
			href={href}
			className={cn("p-3")}
		>
			{children}
		</Link>
	</li>
);

export interface PostTiledListEmptyItemProps
	extends Pick<ComponentPropsWithoutRef<"a">, "href"> {}
