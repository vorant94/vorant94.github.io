import { defineConfig, devices } from '@playwright/test';
import process from 'node:process';
import { envSchema } from './src/config/index.js';

const env = envSchema.parse(process.env);

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: env.CI,
  retries: env.CI ? 2 : 0,
  workers: env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: `http://localhost:${env.PORT}`,
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: {
    command: 'npm run start:prod',
    url: `http://localhost:${env.PORT}`,
    reuseExistingServer: !env.CI,
  },
});
