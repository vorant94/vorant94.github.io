import type { FastifyPluginCallback } from "fastify";
import RSS from "rss";
import { profile } from "../../config/globals/profile.js";
import { contentType } from "../../http/types/content-type.js";
import { statusCode } from "../../http/types/status-code.js";
import { findPosts } from "../../posts/models/post.datasource.js";

export const rssHandler: FastifyPluginCallback = (app, _, done) => {
	app.get("/rss.xml", async (_, reply) => {
		const rss = new RSS({
			title: profile.title,
			description: profile.description,
			// biome-ignore lint/style/useNamingConvention: 3-rd party type
			feed_url: `${app.env.BASE_URL}/rss.xml`,
			// biome-ignore lint/style/useNamingConvention: 3-rd party type
			site_url: app.env.BASE_URL,
			language: "en",
		});

		for (const post of await findPosts()) {
			rss.item({
				title: post.matter.title,
				description: post.matter.description,
				date: post.matter.publishedAt,
				url: `${app.env.BASE_URL}${post.path}`,
				categories: post.matter.tags,
				author: profile.email,
			});
		}

		return reply.status(statusCode.ok).type(contentType.xml).send(rss.xml());
	});

	done();
};
