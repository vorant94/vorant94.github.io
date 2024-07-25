import { format } from "date-fns";
import type { FC } from "react";
import { publishedAtFormat } from "../../content/globals/published-at-format.js";
import { Caption } from "../../ui/components/caption.js";
import { Link } from "../../ui/components/link.js";
import { ThemedImage } from "../../ui/components/themed-image.js";
import { Title } from "../../ui/components/title.js";
import { cn } from "../../ui/utils/cn.js";
import { type PostModel, isPostWithCover } from "../models/post.model.js";

export const PostTiledListItem: FC<PostTiledListItemProps> = ({ post }) => (
	<li
		className={cn(
			"group flex cursor-pointer flex-col rounded-md border border-transparent text-medium duration-100 hover:scale-105 hover:border-slate-300 hover:shadow-md hover:dark:border-slate-600",
		)}
	>
		<Link
			href={post.path}
			className={cn("flex items-center p-3")}
		>
			{/* adding display: flex here breaks inline-block hack from below */}
			<div className={cn("flex-1 overflow-hidden")}>
				<Title
					base="h6"
					className={cn("truncate group-hover:text-inherit")}
				>
					{post.matter.title}
				</Title>
				{/* this inline-block removes the inherited text-decoration, since it cannot be simply
          overridden like any other parent css style */}
				<Caption className="inline-block">
					{format(post.matter.publishedAt, publishedAtFormat.full)}
				</Caption>
			</div>
			{isPostWithCover(post) && (
				<ThemedImage
					className="h-20 w-20 object-scale-down"
					src={post.matter.coverImage}
					srcDark={post.matter.darkCoverImage}
					alt={post.matter.coverAlt}
				/>
			)}
		</Link>
	</li>
);

export interface PostTiledListItemProps {
	post: PostModel;
}
