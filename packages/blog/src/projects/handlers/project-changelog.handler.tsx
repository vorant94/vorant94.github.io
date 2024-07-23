import type { FastifyPluginCallback } from "fastify";
import type { VFile } from "vfile";
import { isErrnoException } from "../../filesystem/utils/is-errno-exception.js";
import { contentType } from "../../http/types/content-type.js";
import { statusCode } from "../../http/types/status-code.js";
import { sendNotFound } from "../../http/utils/send-not-found.js";
import { Title } from "../../ui/components/title.js";
import { DefaultLayout } from "../../ui/layouts/default.layout.js";
import { cn } from "../../ui/utils/cn.js";
import { render } from "../../ui/utils/render.js";
import { getChangelog } from "../models/changelog.datasource.js";
import type { ChangelogModel } from "../models/changelog.model.js";
import { getProject } from "../models/project.datasource.js";
import type { ProjectModel } from "../models/project.model.js";

export const projectChangelogHandler: FastifyPluginCallback = (
	app,
	_,
	done,
) => {
	// biome-ignore lint/style/useNamingConvention: 3-rd party type
	app.get<{ Params: ProjectChangelogParams }>(
		"/projects/:projectSlug/changelogs/:changelogVersion",
		async (request, reply) => {
			let changelogFile: VFile;
			let project: ProjectModel;
			try {
				[changelogFile, project] = await Promise.all([
					getChangelog(
						request.params.projectSlug,
						request.params.changelogVersion,
					),
					getProject(request.params.projectSlug),
				]);
			} catch (e) {
				if (isErrnoException(e)) {
					return sendNotFound(reply);
				}

				throw e;
			}

			// TODO: make VFile generic, didn't work first time, because Vfile.data is type and not interface
			const changelog = changelogFile.data as ChangelogModel;
			const term = `${project.id}-${changelog.id}`;
			const title = `${project.matter.name} ${changelog.matter.version}`;

			return reply
				.status(statusCode.ok)
				.type(contentType.html)
				.send(
					render(
						<DefaultLayout
							title={title}
							description={project.matter.slogan}
							image={project.matter.logoImage}
							type={"article"}
							currentPath={changelog.path}
							env={app.env}
						>
							<div className="flex flex-col gap-6">
								<Title base="h1">{title}</Title>
							</div>

							<article
								className={cn("prose dark:prose-invert prose-img:mx-auto mt-6")}
								// biome-ignore lint/security/noDangerouslySetInnerHtml: html comes from a markdown file, that is part of this project and is checked for security stuff
								dangerouslySetInnerHTML={{ __html: changelogFile.toString() }}
							/>

							<script
								src="https://giscus.app/client.js"
								data-repo="vorant94/digital-garden"
								data-repo-id="R_kgDOKWcyPw"
								data-category="Changelogs"
								data-category-id="DIC_kwDOKWcyP84Cd674"
								data-mapping="specific"
								data-term={term}
								data-strict="0"
								data-reactions-enabled="1"
								data-emit-metadata="0"
								data-input-position="bottom"
								data-theme="preferred_color_scheme"
								data-lang="en"
								data-loading="lazy"
								crossOrigin="anonymous"
								async
							/>
						</DefaultLayout>,
					),
				);
		},
	);

	done();
};

interface ProjectChangelogParams {
	projectSlug: string;
	changelogVersion: string;
}
