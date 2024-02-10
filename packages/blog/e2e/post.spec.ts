import { expect, test } from '@playwright/test';

test('has title according to post title', async ({ page }) => {
  await page.goto('/posts/typescript-monorepos-are-a-mess');

  await expect(page).toHaveTitle(`vorant94 | TypeScript Monorepos are a mess`);
});
