import fastifyStatic from "@fastify/static";
import type { FastifyPluginAsync } from "fastify";
import { resolveContentPath } from "../content/utils/path.js";
import { postPage } from "./pages/post.page.js";
import { postsPage } from "./pages/posts.page.js";
import { tagPage } from "./pages/tag.page.js";

export const postsModule: FastifyPluginAsync = async (app) => {
	await app.register(fastifyStatic, {
		root: resolveContentPath("posts"),
		prefix: "/posts/",
	});

	await app.register(postsPage);
	await app.register(postPage);
	await app.register(tagPage);
};
