import {
	type SchemaContext,
	defineCollection,
	reference,
	z,
} from "astro:content";
import { glob } from "astro/loaders";

const base = z.object({
	title: z.string(),
	description: z.string(),
	tags: z.array(reference("tags")),
	publishedAt: z.date(),
	related: z.array(reference("posts")).nullish(),
	isPinned: z.boolean().nullish().default(false),
	codeUrl: z.string().url().nullish(),
});

const postWithoutCover = base.extend({
	coverImage: z.void(),
});

const postWithCover = ({ image }: SchemaContext) =>
	base.extend({
		coverImage: image(),
		coverAlt: z.string(),
		coverImageDark: image().nullish(),
	});

const posts = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/posts" }),
	schema: (ctx) => z.union([postWithCover(ctx), postWithoutCover]),
});

const tags = defineCollection({
	loader: () => {
		return [
			"lambda",
			"angular",
			"dart",
			"design-patterns",
			"separation-of-concerns",
			"programming",
			"amplify",
			"serverless",
			"docker",
			"typescript",
			"node",
			"infra",
			"psychology",
			"war",
			"self-reflection",
		].map((tag) => ({ id: tag }));
	},
	schema: z.object({
		id: z.string(),
	}),
});

export const collections = { posts, tags };
