import fastifyStatic from '@fastify/static';
import type { FastifyPluginAsync } from 'fastify';
import path from 'node:path';
import process from 'node:process';
import { projectChangelogHandler } from './handlers/project-changelog.handler.js';
import { projectChangelogsHandler } from './handlers/project-changelogs.handler.js';
import { projectHandler } from './handlers/project.handler.js';
import { projectsHandler } from './handlers/projects.handler.js';

export const projectsModule: FastifyPluginAsync = async function (app) {
  app.register(fastifyStatic, {
    root: path.resolve(process.cwd(), 'src/home/assets'),
    prefix: '/projects/',
  });

  app.register(projectsHandler);
  app.register(projectHandler);
  app.register(projectChangelogsHandler);
  app.register(projectChangelogHandler);
};
