import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import postcss from './postcss.config.js';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: { postcss },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
