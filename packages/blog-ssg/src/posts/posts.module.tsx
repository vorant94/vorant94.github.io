import fastifyStatic from '@fastify/static';
import type { FastifyPluginAsync } from 'fastify';
import path from 'node:path';
import process from 'node:process';
import { postHandler } from './handlers/post.handler.js';
import { postsHandler } from './handlers/posts.handler.js';

export const postsModule: FastifyPluginAsync = async function (app) {
  await app.register(fastifyStatic, {
    root: path.resolve(process.cwd(), 'src/posts/assets'),
    prefix: '/posts/',
  });

  await app.register(postsHandler);
  await app.register(postHandler);
};
