import { test, expect } from '@playwright/test';

test('PW-02 should navigate to "Docs" page after clicking Docs link', 
  { tag:"@smoke"}, async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page.getByRole('link', { name: 'Docs' })).toBeVisible();
  await page.getByRole('link', { name: 'Docs' }).click();
  await expect(page).toHaveURL('https://playwright.dev/docs/intro');
  await expect(page.locator('h1')).toContainText('Installation');
});