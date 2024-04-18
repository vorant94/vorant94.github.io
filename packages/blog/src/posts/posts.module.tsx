import fastifyStatic from '@fastify/static';
import type { FastifyPluginAsync } from 'fastify';
import { resolveContentPath } from '../content/index.js';
import { postHandler } from './handlers/post.handler.js';
import { postsHandler } from './handlers/posts.handler.js';
import { tagHandler } from './handlers/tag.handler.js';

export const postsModule: FastifyPluginAsync = async function (app) {
  await app.register(fastifyStatic, {
    root: resolveContentPath('posts'),
    prefix: '/posts/',
  });

  await app.register(postsHandler);
  await app.register(postHandler);
  await app.register(tagHandler);
};
