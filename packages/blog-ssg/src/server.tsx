import { env, isCiEnv } from '@/core/env.js';
import { home } from '@/home/index.js';
import fastifyStatic from '@fastify/static';
import fastify from 'fastify';
import console from 'node:console';
import path from 'node:path';
import process from 'node:process';

if (isCiEnv(env)) {
  throw new Error(`Can't start server in CI env`);
}

const app = fastify();

app.register(fastifyStatic, {
  root: path.resolve(process.cwd(), 'public'),
});

app.register(home);

app.listen({ port: env.PORT }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  console.log(`Server listening at ${address}`);
});
