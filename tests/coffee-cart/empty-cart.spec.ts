import { test, expect } from '@playwright/test';

test('CC-02 cart should be empty by default',
  { tag:"@cart"}, async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  await expect(page.getByLabel('Cart page')).toContainText('cart (0)');
  await page.getByRole('link', { name: 'Cart page' }).click();
  await expect(page.getByRole('paragraph')).toContainText('No coffee, go add some.');
});