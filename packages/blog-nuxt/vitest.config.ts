import { defineVitestConfig } from '@nuxt/test-utils/config';

export default defineVitestConfig({
  test: {
    dir: './src',
    environment: 'happy-dom',
    setupFiles: ['./test-setup.ts'],
  },
});
