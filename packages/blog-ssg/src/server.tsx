import { homeModule } from '@/home/home.module.js';
import { postsModule } from '@/posts/posts.module.js';
import { projectsModule } from '@/projects/projects.module.js';
import { env, isCiEnv } from '@/shared/env.js';
import { uiModule } from '@/ui/ui.module.js';
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

const app = fastify({
  ignoreTrailingSlash: true,
});

await app.register(fastifyStatic, {
  root: path.resolve(process.cwd(), 'public'),
});

await app.register(uiModule);
await app.register(homeModule);
await app.register(postsModule);
await app.register(projectsModule);

app.listen({ port: env.PORT }, (err, address) => {
  if (err) {
    consola.error(err);
    process.exit(1);
  }

  consola.success(`Server listening at ${address}`);
});
