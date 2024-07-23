import { format } from "date-fns";
import type { FastifyPluginAsync } from "fastify";
import { groupBy } from "lodash-es";
import { contentType } from "../../http/types/content-type.js";
import { statusCode } from "../../http/types/status-code.js";
import { ArchiveListItem } from "../../ui/components/archive-list-item.js";
import { ArchiveList } from "../../ui/components/archive-list.js";
import { DefaultLayout } from "../../ui/layouts/default.layout.js";
import { render } from "../../ui/utils/render.js";
import { findPosts } from "../models/post.table.js";
import { publishedAtFormat } from "../../content/globals/published-at-format.js";

export const postsPage: FastifyPluginAsync = async (app) => {
	app.get("/posts", async (_, reply) => {
		const allPosts = await findPosts();

		const postsByPublishedAt = groupBy(allPosts, (post) =>
			format(post.matter.publishedAt, publishedAtFormat.year),
		);
		const years = Object.keys(postsByPublishedAt).reverse();

		return reply
			.status(statusCode.ok)
			.type(contentType.html)
			.send(
				render(
					<DefaultLayout
						title={"Posts"}
						currentPath={"/posts"}
						env={app.env}
					>
						{years.map((year) => (
							<ArchiveList
								title={year}
								key={year}
							>
								{postsByPublishedAt[year]?.map((post) => (
									<ArchiveListItem
										key={post.id}
										left={post.matter.title}
										right={format(
											post.matter.publishedAt,
											publishedAtFormat.short,
										)}
										href={post.path}
									/>
								))}
							</ArchiveList>
						))}
					</DefaultLayout>,
				),
			);
	});
};
