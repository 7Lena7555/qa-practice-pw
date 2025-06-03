import { test , expect } from '@playwright/test';
import { generateTestUser } from '../pages/register-page.ts';
import { registerUser } from '../pages/register-page.ts';

test('CD-01 user should register successfully',
     { tag: "@registration" }, async ({ page }) => {
await page.goto('https://demo.learnwebdriverio.com/');

const registerLocator = page.locator("a[href='/register']");
await registerLocator.click();

await page.waitForSelector("h1[class*='text-xs-center']", { timeout: 10000 });
await expect(page.locator("h1[class*='text-xs-center']")).toContainText('Sign up');
await expect(page).toHaveURL('https://demo.learnwebdriverio.com/register');
const user = generateTestUser();

await registerUser(page, user);

await expect(page).toHaveURL('https://demo.learnwebdriverio.com/');



});