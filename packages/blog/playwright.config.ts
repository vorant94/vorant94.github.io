import { defineConfig, devices } from '@playwright/test';
import { config } from 'dotenv';
import { z } from 'zod';

const env = z
  .object({
    CI: z.boolean().optional().default(false),
  })
  .parse(config().parsed);

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: env.CI,
  retries: env.CI ? 2 : 0,
  workers: env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:4321',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: {
    command: 'yarn start',
    url: 'http://localhost:4321',
    reuseExistingServer: !env.CI,
  },
});
