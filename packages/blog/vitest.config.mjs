import { getViteConfig } from 'astro/config';

export default getViteConfig({
  test: {
    dir: './src',
    environment: 'jsdom',
    setupFiles: ['./test-setup.ts'],
  },
});
