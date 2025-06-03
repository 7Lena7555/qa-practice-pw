import { test, expect } from '@playwright/test';

test('PW-03 should click on the "Get started" button',
  { tag:"@smoke"}, async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();
  await expect(page).toHaveURL("https://playwright.dev/docs/intro");
  await expect(page.locator('h1')).toContainText('Installation');
});