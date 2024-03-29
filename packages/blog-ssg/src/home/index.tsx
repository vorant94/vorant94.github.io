import fastifyStatic from '@fastify/static';
import type { FastifyPluginAsync } from 'fastify';
import path from 'node:path';
import process from 'node:process';
import { aboutHandler } from './handlers/about/about.handler.js';
import { homeHandler } from './handlers/home/home.handler.js';

export const homePlugin: FastifyPluginAsync = async function (app) {
  app.register(fastifyStatic, {
    root: path.resolve(process.cwd(), 'src/home/assets'),
    prefix: '/home/',
  });

  app.register(homeHandler);
  app.register(aboutHandler);
};
