import { test, expect } from '@playwright/test';

test('CC-01 items should be added to the cart',
  { tag:"@cart"}, async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  await expect(page.locator('[data-test="Espresso_Macchiato"]')).toBeVisible();
  await page.locator('[data-test="Espresso_Macchiato"]').click();
  await expect(page.locator('[data-test="Cappuccino"]')).toBeVisible();
  await page.locator('[data-test="Cappuccino"]').click();
  await expect(page.getByLabel('Cart page')).toContainText('cart (2)');
});