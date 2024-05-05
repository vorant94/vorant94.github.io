import path from 'node:path';
import process from 'node:process';
import { defineConfig } from 'vite';

export default defineConfig({
  publicDir: false,
  build: {
    outDir: path.resolve(process.cwd(), 'public/client'),
    lib: {
      entry: path.resolve(process.cwd(), 'src/client.ts'),
      fileName: 'main',
      formats: ['es'],
    },
  },
});
