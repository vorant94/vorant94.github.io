import fastifyStatic from '@fastify/static';
import type { FastifyPluginAsync } from 'fastify';
import path from 'node:path';
import process from 'node:process';

export const uiModule: FastifyPluginAsync = async function (app) {
  await app.register(fastifyStatic, {
    root: path.resolve(process.cwd(), 'src/ui/assets'),
    prefix: '/ui/',
  });
};
