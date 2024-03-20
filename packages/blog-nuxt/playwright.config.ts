import type { ConfigOptions } from '@nuxt/test-utils/playwright';
import { defineConfig, devices } from '@playwright/test';
import { config } from 'dotenv';
import process from 'node:process';
import { z } from 'zod';

config();

const schema = z.object({
  CI: z.coerce.boolean().optional().default(false),
});
const env = schema.parse(process.env);

export default defineConfig<ConfigOptions>({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: env.CI,
  retries: env.CI ? 2 : 0,
  workers: env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:3000',
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
    url: 'http://localhost:3000',
    // TODO it seems like @nuxt/test-utils ignores this option, need to understand why
    reuseExistingServer: !env.CI,
  },
});
