import { test, expect } from '@playwright/test';

test('CC-04 should remove item from cart',
  { tag:"@cart"}, async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  await page.locator('[data-test="Cappuccino"]').click();
  await page.getByRole('link', { name: 'Cart page' }).click();
  await page.getByRole('button', { name: 'Remove all Cappuccino' }).click();
  await page.getByText('No coffee, go add some.').click();
  await expect(page.getByRole('paragraph')).toContainText('No coffee, go add some.');
  await expect(page).toHaveURL('https://coffee-cart.app/cart');
});
