import type { FastifyPluginCallback } from "fastify";
import { groupBy } from "lodash-es";
import { contentType } from "../../http/types/content-type.js";
import { statusCode } from "../../http/types/status-code.js";
import { DefaultLayout } from "../../ui/layouts/default.layout.js";
import { render } from "../../ui/utils/render.js";
import { ProjectTiledListItem } from "../components/project-tiled-list-item.js";
import { ProjectTiledList } from "../components/project-tiled-list.js";
import { findChangelogs } from "../models/changelog.datasource.js";
import type { ChangelogModel } from "../models/changelog.model.js";
import { findProjects } from "../models/project.datasource.js";
import {
	type ProjectStatus,
	projectStatusOrder,
	projectStatusToLabel,
} from "../models/project.model.js";
import { getProjectIdFromChangelogPath } from "../utils/get-project-id-from-changelog-path.js";

export const projectsHandler: FastifyPluginCallback = (app, _, done) => {
	app.get("/projects", async (_, reply) => {
		const [allProjects, allChangelogs] = await Promise.all([
			findProjects(),
			findChangelogs(),
		]);

		const projectsByStatus = groupBy(
			allProjects,
			(project) => project.matter.status,
		);

		const statuses = (
			Object.keys(projectsByStatus) as Array<ProjectStatus>
		).toSorted((a, b) => projectStatusOrder[a] - projectStatusOrder[b]);

		const changelogsByProject = groupBy(allChangelogs, (changelog) =>
			getProjectIdFromChangelogPath(changelog.path),
		);

		return reply
			.status(statusCode.ok)
			.type(contentType.html)
			.send(
				render(
					<DefaultLayout
						title={"Projects"}
						currentPath={"/projects"}
						env={app.env}
					>
						{statuses.map((status) => (
							<ProjectTiledList
								title={projectStatusToLabel[status]}
								key={status}
							>
								{projectsByStatus[status]?.map((project) => (
									<ProjectTiledListItem
										key={project.id}
										project={project}
										changelogs={
											changelogsByProject[project.id] as Array<ChangelogModel>
										}
									/>
								))}
							</ProjectTiledList>
						))}
					</DefaultLayout>,
				),
			);
	});

	done();
};
