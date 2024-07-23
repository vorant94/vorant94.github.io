import type { PostModel } from "../models/post.model.js";

export function getUniqueTags(posts: PostModel[]): string[] {
	const allTags = posts.flatMap((post) => post.matter.tags);

	return [...new Set(allTags)];
}
