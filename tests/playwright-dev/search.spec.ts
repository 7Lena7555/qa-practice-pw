import { test, expect } from '@playwright/test';

test('PW-01 search should works',
  {tag: "@search"}, async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('button', { name: 'Search (Ctrl+K)' }).click();
  await page.getByRole('searchbox', { name: 'Search' }).fill('API');
  await page.getByRole('link', { name: 'Mock browser APIs' }).click();
  await expect(page.locator('h1')).toContainText('Mock browser APIs');
  await expect(page).toHaveURL("https://playwright.dev/docs/mock-browser-apis");

});