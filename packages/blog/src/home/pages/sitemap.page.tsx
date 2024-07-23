import type { FastifyPluginAsync } from "fastify";
import { Readable } from "node:stream";
import { SitemapStream, streamToPromise, type IndexItem } from "sitemap";
import type { ContentModel } from "../../content/models/content.model.js";
import { contentType } from "../../http/types/content-type.js";
import { statusCode } from "../../http/types/status-code.js";
import { findPosts } from "../../posts/models/post.table.js";
import { getUniqueTags } from "../../posts/utils/get-unique-tags.js";
import { findChangelogs } from "../../projects/models/changelog.table.js";
import { findProjects } from "../../projects/models/project.table.js";

export const sitemapPage: FastifyPluginAsync = async (app) => {
	app.get("/sitemap.xml", async (_, reply) => {
		const sitemapStream = new SitemapStream({
			hostname: app.env.BASE_URL,
		});

		const [posts, projects, changelogs] = await Promise.all([
			findPosts(),
			findProjects(),
			findChangelogs(),
		]);
		const tags = getUniqueTags(posts);

		const links: IndexItem[] = [
			{ url: "/" },
			{ url: "/about" },
			{ url: "/posts" },
			{ url: "/projects" },
			...posts.map(contentToIndexItem),
			...tags.map(tagToIndexItem),
			...projects.map(contentToIndexItem),
			...changelogs.map(contentToIndexItem),
		];

		const sitemap = await streamToPromise(
			Readable.from(links).pipe(sitemapStream),
		);

		return reply
			.status(statusCode.ok)
			.type(contentType.xml)
			.send(sitemap.toString());
	});
};

function contentToIndexItem(content: ContentModel): IndexItem {
	return {
		url: content.path,
	};
}

function tagToIndexItem(tag: string): IndexItem {
	return {
		url: `/tags/${tag}`,
	};
}
