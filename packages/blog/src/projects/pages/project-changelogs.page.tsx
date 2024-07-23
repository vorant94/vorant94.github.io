import type { FastifyPluginAsync } from "fastify";
import { contentType } from "../../http/types/content-type.js";
import { statusCode } from "../../http/types/status-code.js";
import { DefaultLayout } from "../../ui/layouts/default.layout.js";
import { render } from "../../ui/utils/render.js";

export const projectChangelogsPage: FastifyPluginAsync = async (app) => {
	app.get<{ Params: ProjectChangelogsParams }>(
		"/projects/:slug/changelogs",
		async (request, reply) => {
			return reply
				.status(statusCode.ok)
				.type(contentType.html)
				.send(
					render(
						<DefaultLayout
							currentPath={`/projects/${request.params.slug}/changelogs`}
							env={app.env}
						>
							{request.params.slug} changelogs
						</DefaultLayout>,
					),
				);
		},
	);
};

interface ProjectChangelogsParams {
	slug: string;
}
