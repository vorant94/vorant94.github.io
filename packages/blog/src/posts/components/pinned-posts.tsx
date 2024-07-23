import { format } from "date-fns";
import type { FC } from "react";
import { ArchiveListItem } from "../../ui/components/archive-list-item.js";
import { StandOut } from "../../ui/components/stand-out.js";
import { cn } from "../../ui/utils/cn.js";
import type { PostModel } from "../models/post.model.js";
import { publishedAtFormat } from "../../content/globals/published-at-format.js";

export const PinnedPosts: FC<PinnedPostsProps> = ({ posts }) => (
	<menu>
		{posts.map((post) => (
			<StandOut
				className="flex-col"
				key={post.id}
			>
				<span className="flex items-center gap-3">
					<span className="-scale-x-100">📌</span>

					<ArchiveListItem
						left={post.matter.title}
						right={format(post.matter.publishedAt, publishedAtFormat.short)}
						href={post.path}
						className={cn("!py-0 flex-1")}
					/>
				</span>
			</StandOut>
		))}
	</menu>
);

export interface PinnedPostsProps {
	posts: Array<PostModel>;
}
