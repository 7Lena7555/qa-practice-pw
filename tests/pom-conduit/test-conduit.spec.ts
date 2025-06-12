import { test , expect } from '@playwright/test';

test('C-02 user should login successfully',
     { tag: "@login" }, async ({ page }) => {
await page.goto('https://demo.learnwebdriverio.com/');
await page.getByText('Sign in').click();
await page.locator('input[placeholder="Email"]').fill('olena12345@gmail.com');
await page.locator('input[placeholder="Password"]').fill('olena12345');
await page.locator('button').click();
await expect(page).toHaveURL('https://demo.learnwebdriverio.com/login');
await expect(page.getByRole('link', { name: 'olena12345' })).toContainText('olena12345');

});