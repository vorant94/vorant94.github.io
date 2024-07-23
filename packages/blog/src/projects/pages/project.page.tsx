import type { FastifyPluginAsync } from "fastify";
import type { VFile } from "vfile";
import { isErrnoException } from "../../filesystem/models/error.model.js";
import { contentType } from "../../http/types/content-type.js";
import { statusCode } from "../../http/types/status-code.js";
import { sendNotFound } from "../../http/utils/send-not-found.js";
import { ButtonLink } from "../../ui/components/button-link.js";
import { Icon } from "../../ui/components/icon.js";
import { Text } from "../../ui/components/text.js";
import { ThemedImage } from "../../ui/components/themed-image.js";
import { Title } from "../../ui/components/title.js";
import { DefaultLayout } from "../../ui/layouts/default.layout.js";
import { cn } from "../../ui/utils/cn.js";
import { render } from "../../ui/utils/render.js";
import { ProjectChangelogs } from "../components/project-changelogs.js";
import { Version } from "../components/version.js";
import { findChangelogs } from "../models/changelog.table.js";
import type { ProjectModel } from "../models/project.model.js";
import { getProjectFile } from "../models/project.table.js";

export const projectPage: FastifyPluginAsync = async (app) => {
	app.get<{ Params: ProjectParams }>(
		"/projects/:slug",
		async (request, reply) => {
			let projectFile: VFile;
			try {
				projectFile = await getProjectFile(request.params.slug);
			} catch (e) {
				if (isErrnoException(e)) {
					return sendNotFound(reply);
				}

				throw e;
			}

			// TODO: make VFile generic, didn't work first time, because Vfile.data is type and not interface
			const project = projectFile.data as ProjectModel;
			const changelogs = await findChangelogs(project.id);

			return reply
				.status(statusCode.ok)
				.type(contentType.html)
				.send(
					render(
						<DefaultLayout
							title={project.matter.name}
							description={project.matter.slogan}
							image={project.matter.logoImage}
							type={"article"}
							currentPath={project.path}
							env={app.env}
						>
							<div className={cn("flex flex-col items-center gap-6")}>
								<Title base="h1">{project.matter.name}</Title>

								<Version
									status={project.matter.status}
									showStatus={true}
								>
									{project.matter.version}
								</Version>

								<ThemedImage
									src={project.matter.demoImage}
									srcDark={project.matter.darkDemoImage}
									alt={"demo"}
								/>

								<Text base="em">{project.matter.slogan}</Text>

								<menu className={cn("flex gap-2")}>
									{project.matter.productionUrl && (
										<li>
											<ButtonLink
												size="sm"
												target="_blank"
												href={project.matter.productionUrl}
												variant={"outlined"}
												className={cn(
													"bg-slate-50 dark:bg-slate-900 p-2 flex gap-1.5 items-center",
												)}
											>
												<Icon glyph="globe" />
												Production
											</ButtonLink>
										</li>
									)}

									<li>
										<ButtonLink
											size="sm"
											target="_blank"
											href={project.matter.sourceCodeUrl}
											variant={"outlined"}
											className={cn(
												"bg-slate-50 dark:bg-slate-900 p-2 flex gap-1.5 items-center",
											)}
										>
											<Icon glyph="github" />
											Source
										</ButtonLink>
									</li>
								</menu>
							</div>

							<article
								className={cn("prose dark:prose-invert prose-img:mx-auto mt-6")}
								dangerouslySetInnerHTML={{ __html: projectFile.toString() }}
							/>

							<ProjectChangelogs changelogs={changelogs} />

							<script
								src="https://giscus.app/client.js"
								data-repo="vorant94/digital-garden"
								data-repo-id="R_kgDOKWcyPw"
								data-category="Projects"
								data-category-id="DIC_kwDOKWcyP84Cd672"
								data-mapping="specific"
								data-term={project.id}
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
};

interface ProjectParams {
	slug: string;
}
