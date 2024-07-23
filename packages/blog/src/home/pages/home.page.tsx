import type { FastifyPluginCallback } from "fastify";
import { contentType } from "../../http/types/content-type.js";
import { statusCode } from "../../http/types/status-code.js";
import { PinnedPosts } from "../../posts/components/pinned-posts.js";
import { RecentPosts } from "../../posts/components/recent-posts.js";
import { findPosts } from "../../posts/models/post.table.js";
import { FeaturedProjects } from "../../projects/components/featured-projects.js";
import { findProjects } from "../../projects/models/project.table.js";
import { DefaultLayout } from "../../ui/layouts/default.layout.js";
import { render } from "../../ui/utils/render.js";
import { Intro } from "../components/intro.js";

export const homePage: FastifyPluginCallback = (app, _, done) => {
	app.get("/", async (_, reply) => {
		const [allPosts, allProjects] = await Promise.all([
			findPosts(),
			findProjects(),
		]);

		const pinnedPosts = allPosts.filter((post) => post.matter.isPinned);

		const recentPosts = allPosts.slice(0, 3);

		const featuredProjects = allProjects.filter(
			(project) => project.matter.isFeatured,
		);

		return reply
			.status(statusCode.ok)
			.type(contentType.html)
			.send(
				render(
					<DefaultLayout
						currentPath={"/"}
						env={app.env}
					>
						<PinnedPosts posts={pinnedPosts} />

						<Intro />

						<FeaturedProjects projects={featuredProjects} />

						<RecentPosts posts={recentPosts} />
					</DefaultLayout>,
				),
			);
	});

	done();
};
