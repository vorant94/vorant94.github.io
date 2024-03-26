import path from 'node:path';
import process from 'node:process';
import { defineConfig } from 'vite';

export default defineConfig({
  root: path.resolve(process.cwd(), '.output'),
  server: {
    port: 3000,
    hmr: true,
  },
});
