import { env, isCiEnv } from '@/core/env.js';
import { homePlugin } from '@/home/index.js';
import { uiPlugin } from '@/ui/index.js';
import fastifyStatic from '@fastify/static';
import consola from 'consola';
import fastify from 'fastify';
import path from 'node:path';
import process from 'node:process';

consola.start('Starting server...');

if (isCiEnv(env)) {
  const err = new Error(`Can't start server in CI env`);
  consola.error(err);
  throw err;
}

const app = fastify();

app.register(fastifyStatic, {
  root: path.resolve(process.cwd(), 'public'),
});

await app.register(uiPlugin);
await app.register(homePlugin);

app.listen({ port: env.PORT }, (err, address) => {
  if (err) {
    consola.error(err);
    process.exit(1);
  }

  consola.success(`Server listening at ${address}`);
});
