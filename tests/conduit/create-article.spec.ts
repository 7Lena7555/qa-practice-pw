import { test , expect } from '@playwright/test';

test('C-04 user should published article successfully',
     { tag: "@article" }, async ({ page }) => {
await page.goto('https://demo.learnwebdriverio.com/');
await page.getByText('Sign in').click();
await page.locator('input[placeholder="Email"]').fill('olena015@gmail.com');
await page.locator('input[placeholder="Password"]').fill('admin015');
await page.locator('button').click();
await expect(page).toHaveURL('https://demo.learnwebdriverio.com/login');
await expect(page.getByRole('link', { name: 'olena015' })).toContainText('olena015');
 
await page.locator('a[href="/editor"]').click();
await expect(page).toHaveURL('https://demo.learnwebdriverio.com/editor');
await page.locator('input[placeholder="Article Title"]').fill('My first article');
await page.getByTestId('editor-description').fill('Technology'); 
     
await page.locator('//textarea').fill("Microsoft said on Tuesday it was laying off less than 3% of its workforce, or around 6,000 employees, as the technology giant looks to rein in costs while funneling billions of dollars into its ambitious bet on artificial intelligence.");
await page.getByTestId('editor-publish').click();
await expect(page.getByTestId('article-title')).toContainText('My first article');
     });