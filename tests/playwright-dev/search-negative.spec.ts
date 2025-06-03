import { test, expect } from '@playwright/test';

test('PW-04 search should works correctly',
  {tag: "@search"}, async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('button', { name: 'Search (Ctrl+K)' }).click();
  await page.getByRole('searchbox', { name: 'Search' }).fill('RTryu');
  await expect(page.locator('body')).toContainText('No results for "RTryu"');
});