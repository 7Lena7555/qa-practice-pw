import { test, expect } from '@playwright/test';

test('CC-033 should add all coffees to the cart',
  { tag:"@cart"}, async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  const coffeeCaps = await page.locator('.cup-body:not(.disabled-hover)').all();
  console.log();
});