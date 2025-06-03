import { test, expect } from '@playwright/test';

test('PW-05 check navbar title color',
  { tag: "@smoke" }, async ({ page }) => {
  await page.goto('https://playwright.dev/');
  
  // Знаходимо елемент із класами navbar__title і text--truncate
  const navbarTitle = page.getByLabel('Main', { exact: true }).locator('.navbar__title.text--truncate');
  
  // Перевіряємо, що текст у елементі є "Playwright"
  await expect(navbarTitle).toContainText('Playwright');
  
  // Отримуємо CSS-властивість color
  const color = await navbarTitle.evaluate((el) => window.getComputedStyle(el).color);
  
  // Перевіряємо, що колір є rgb(28, 30, 33) (еквівалент #1C1E21)
  expect(color).toBe('rgb(28, 30, 33)');
});