import fastifyStatic from "@fastify/static";
import type { FastifyPluginAsync } from "fastify";
import { resolveContentPath } from "../content/utils/path.js";
import { projectChangelogPage } from "./pages/project-changelog.page.js";
import { projectChangelogsPage } from "./pages/project-changelogs.page.js";
import { projectPage } from "./pages/project.page.js";
import { projectsPage } from "./pages/projects.page.js";

export const projectsModule: FastifyPluginAsync = async (app) => {
	await app.register(fastifyStatic, {
		root: resolveContentPath("projects"),
		prefix: "/projects/",
	});

	await app.register(projectsPage);
	await app.register(projectPage);
	await app.register(projectChangelogsPage);
	await app.register(projectChangelogPage);
};
