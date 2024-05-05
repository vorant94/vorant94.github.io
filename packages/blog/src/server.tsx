import fastifyStatic from '@fastify/static';
import closeWithGrace from 'close-with-grace';
import Fastify from 'fastify';
import path from 'node:path';
import process from 'node:process';
import { envSchema } from './config/index.js';
import { homeModule } from './home/index.js';
import { sendNotFound } from './http/index.js';
import { postsModule } from './posts/index.js';
import { projectsModule } from './projects/index.js';
import { uiModule } from './ui/index.js';

const app = Fastify({
  logger: true,
  ignoreTrailingSlash: true,
});

app.decorate('env', envSchema.parse(process.env));

await app.register(fastifyStatic, {
  root: path.resolve(process.cwd(), 'public'),
});

await app.register(uiModule);
await app.register(homeModule);
await app.register(postsModule);
await app.register(projectsModule);

app.setNotFoundHandler(async (_, reply) => {
  return sendNotFound(reply);
});

const closeListeners = closeWithGrace({ delay: 500 }, async function ({ err }) {
  if (err) {
    app.log.error(err);
  }
  await app.close();
});

app.addHook('onClose', (_, done) => {
  closeListeners.uninstall();
  done();
});

// need to mention host so fastify would work in docker,
//  see https://stackoverflow.com/questions/61822353/fastify-not-working-on-docker-kubernetes
app.listen({ port: app.env.PORT, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }

  app.log.info(`Listening on: ${address}`);
});
