import fastifyStatic from '@fastify/static';
import type { FastifyPluginAsync } from 'fastify';
import path from 'node:path';
import process from 'node:process';
import { aboutHandler } from './handlers/about.handler.js';
import { homeHandler } from './handlers/home.handler.js';
import { rssHandler } from './handlers/rss.handler.js';
import { sitemapHandler } from './handlers/sitemap.handler.js';

export const homeModule: FastifyPluginAsync = async function (app) {
  await app.register(fastifyStatic, {
    root: path.resolve(process.cwd(), 'src/home/assets'),
    prefix: '/home/',
  });

  await app.register(homeHandler);
  await app.register(aboutHandler);
  await app.register(rssHandler);
  await app.register(sitemapHandler);
};
