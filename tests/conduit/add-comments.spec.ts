import { test , expect } from '@playwright/test';

test('C-05 should added comment',
     { tag: "@user" }, async ({ page }) => {
await page.goto('https://demo.learnwebdriverio.com/');
await page.getByText('Sign in').click();
await page.locator('input[placeholder="Email"]').fill('olena012@gmail.com');
await page.locator('input[placeholder="Password"]').fill('admin012');
await page.locator('button').click();
await expect(page).toHaveURL('https://demo.learnwebdriverio.com/login');
await expect(page.getByRole('link', { name: 'olena012' })).toContainText('olena012');
await page.locator('[data-qa-type="preview-title"]').first().click();
await page.locator('//textarea').fill('Hello! Good job!');
await page.locator('button[class="btn btn-sm btn-primary"]').click();
await expect(page.getByText('Hello! Good job!').first()).toContainText('Hello! Good job!');

});