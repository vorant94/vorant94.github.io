import path from 'node:path';
import process from 'node:process';
import { defineConfig } from 'vite';
import { env } from './src/core/env.js';

export default defineConfig({
  root: path.resolve(process.cwd(), env.OUTPUT_DIR),
  server: {
    port: env.PORT,
  },
});
