import { test , expect } from '@playwright/test';

test('C-03 user should logout successfully',
     { tag: "@logout" }, async ({ page }) => {
await page.goto('https://demo.learnwebdriverio.com/');
await page.getByText('Sign in').click();
await page.locator('input[placeholder="Email"]').fill('olena015@gmail.com');
await page.locator('input[placeholder="Password"]').fill('admin015');
await page.locator('button').click();
await expect(page).toHaveURL('https://demo.learnwebdriverio.com/login');
await expect(page.getByRole('link', { name: 'olena015' })).toContainText('olena015');

await page.locator('//a[@href="/settings"]').waitFor();
await page.locator('//a[@href="/settings"]').click();
await expect(page).toHaveURL('https://demo.learnwebdriverio.com/settings');
await page.locator('//button[@class="btn btn-outline-danger"]').click();
await expect(page).toHaveURL('https://demo.learnwebdriverio.com/');
});