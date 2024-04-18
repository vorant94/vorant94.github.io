import fastifyStatic from '@fastify/static';
import type { FastifyPluginAsync } from 'fastify';
import { resolveContentPath } from '../content/index.js';
import { projectChangelogHandler } from './handlers/project-changelog.handler.js';
import { projectChangelogsHandler } from './handlers/project-changelogs.handler.js';
import { projectHandler } from './handlers/project.handler.js';
import { projectsHandler } from './handlers/projects.handler.js';

export const projectsModule: FastifyPluginAsync = async function (app) {
  await app.register(fastifyStatic, {
    root: resolveContentPath('projects'),
    prefix: '/projects/',
  });

  await app.register(projectsHandler);
  await app.register(projectHandler);
  await app.register(projectChangelogsHandler);
  await app.register(projectChangelogHandler);
};
