import { test , expect } from '@playwright/test';

test('CD-02 user should login successfully',
     { tag: "@login" }, async ({ page }) => {
await page.goto('https://demo.learnwebdriverio.com/');
await page.getByText('Sign in').click();
const emailLocator = page.locator('input[placeholder="Email"]');
await emailLocator.fill('olena015@gmail.com');
const passwordLocator = page.locator('input[placeholder="Password"]');
await passwordLocator.fill('admin015');
await page.locator('button').click();
await expect(page).toHaveURL('https://demo.learnwebdriverio.com/login');
await expect(page.getByRole('link', { name: 'olena015' })).toContainText('olena015');

});