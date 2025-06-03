import { test, expect } from '@playwright/test';

test.use({ actionTimeout: 60000 });

test('PW-05 option from dropdown should be used',
  {tag: "@smoke"}, async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page.getByLabel('Main', { exact: true }).locator('b')).toContainText('Playwright');
  await page.getByLabel('Main', { exact: true }).getByRole('button', { name: 'Node.js' }).hover();
  await page.getByLabel('Main', { exact: true }).getByRole('link', { name: 'Python' }).click();
  await expect(page.getByLabel('Main', { exact: true }).locator('b')).toContainText('Playwright for Python');
  await expect(page).toHaveURL("https://playwright.dev/python/");
});
