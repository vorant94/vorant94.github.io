import { z } from "zod";
import { contentSchema } from "../../content/models/content.model.js";

const base = z.object({
	title: z.string(),
	description: z.string(),
	tags: z.array(z.string()),
	publishedAt: z.coerce.date(),
	related: z.array(z.string()).nullish(),
	isPinned: z.boolean().nullish().default(false),
	codeUrl: z.string().url().nullish(),
});
const withCover = base.extend({
	coverImage: z.string(),
	coverAlt: z.string(),
	darkCoverImage: z.string().nullish(),
});
const withoutCover = base.extend({
	coverImage: z.void(),
});
export const postSchema = contentSchema.extend({
	matter: z.union([withCover, withoutCover]),
});

export type PostModel = z.infer<typeof postSchema>;

export interface PostWithCoverModel extends PostModel {
	matter: z.infer<typeof withCover>;
}

export function isPostWithCover(post: PostModel): post is PostWithCoverModel {
	return "coverImage" in post.matter;
}
