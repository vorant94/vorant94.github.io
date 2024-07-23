import fastifyStatic from "@fastify/static";
import type { FastifyPluginAsync } from "fastify";
import path from "node:path";
import process from "node:process";
import { aboutPage } from "./pages/about.page.js";
import { homePage } from "./pages/home.page.js";
import { rssPage } from "./pages/rss.page.js";
import { sitemapPage } from "./pages/sitemap.page.js";

export const homeModule: FastifyPluginAsync = async (app) => {
	await app.register(fastifyStatic, {
		root: path.resolve(process.cwd(), "src/home/assets"),
		prefix: "/home/",
	});

	await app.register(homePage);
	await app.register(aboutPage);
	await app.register(rssPage);
	await app.register(sitemapPage);
};
