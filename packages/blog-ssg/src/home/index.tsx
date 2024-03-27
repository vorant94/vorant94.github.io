import type { FastifyPluginAsync } from 'fastify';
import { aboutHandler } from './about/about.handler.js';
import { homeHandler } from './home/home.handler.js';

export const home: FastifyPluginAsync = async function (app) {
  app.register(homeHandler);
  app.register(aboutHandler);
};
