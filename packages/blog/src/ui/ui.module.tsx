import path from "node:path";
import process from "node:process";
import fastifyStatic from "@fastify/static";
import type { FastifyPluginAsync } from "fastify";

export const uiModule: FastifyPluginAsync = async (app) => {
	await app.register(fastifyStatic, {
		root: path.resolve(process.cwd(), "src/ui/assets"),
		prefix: "/ui/",
	});
};
