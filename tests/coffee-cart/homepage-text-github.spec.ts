import { test, expect } from '@playwright/test';

test('CC-03 should redirect to the github page by clicking on the "github" link',
  { tag:"@smoke"}, async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  await expect(page.getByLabel('GitHub page')).toContainText('github');
  await page.getByRole('link', { name: 'GitHub page' }).click();
  await expect(page).toHaveURL('https://coffee-cart.app/github');
});