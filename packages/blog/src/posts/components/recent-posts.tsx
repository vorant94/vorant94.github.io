import type { FC } from "react";
import type { PostModel } from "../models/post.model.js";
import { PostTiledListEmptyItem } from "./post-tiled-list-empty-item.js";
import { PostTiledListItem } from "./post-tiled-list-item.js";
import { PostTiledList } from "./post-tiled-list.js";

export const RecentPosts: FC<RecentPostsProps> = ({ posts }) => (
	<PostTiledList title={"Recent Posts"}>
		{posts.map((post) => (
			<PostTiledListItem
				post={post}
				key={post.id}
			/>
		))}
		<PostTiledListEmptyItem href={"/posts"}>See all</PostTiledListEmptyItem>
	</PostTiledList>
);

export interface RecentPostsProps {
	posts: PostModel[];
}
