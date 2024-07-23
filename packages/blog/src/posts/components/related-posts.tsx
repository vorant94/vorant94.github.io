import { format } from "date-fns";
import type { FC } from "react";
import { ArchiveListItem } from "../../ui/components/archive-list-item.js";
import { ArchiveList } from "../../ui/components/archive-list.js";
import { StandOut } from "../../ui/components/stand-out.js";
import { Title } from "../../ui/components/title.js";
import { cn } from "../../ui/utils/cn.js";
import type { PostModel } from "../models/post.model.js";
import { publishedAtFormat } from "../../content/globals/published-at-format.js";

export const RelatedPosts: FC<RelatedPostsProps> = ({ posts }) => (
	<StandOut className="flex-col">
		<details
			className={cn(
				"text-slate-800 dark:text-slate-100",
				"related-posts__details",
			)}
		>
			<summary className="hover:cursor-pointer">
				<Title
					base="h6"
					className="mb-0 inline-block"
				>
					<span className="pl-2">Related posts</span>
				</Title>
			</summary>
			<ArchiveList>
				{posts.map((post) => (
					<ArchiveListItem
						key={post.id}
						left={post.matter.title}
						right={format(post.matter.publishedAt, publishedAtFormat.short)}
						href={post.path}
					/>
				))}
			</ArchiveList>
		</details>
	</StandOut>
);

export interface RelatedPostsProps {
	posts: Array<PostModel>;
}
