import { test , expect } from '@playwright/test';

test('C-04  should published article successfully',
     { tag: "@article" }, async ({ page }) => {
await page.goto('https://demo.learnwebdriverio.com/');
await page.getByText('Sign in').click();
const emailLocator = page.locator('input[placeholder="Email"]');
await emailLocator.fill('olena015@gmail.com');
const passwordLocator = page.locator('input[placeholder="Password"]');
await passwordLocator.fill('admin015');
await page.locator('button').click();
await expect(page).toHaveURL('https://demo.learnwebdriverio.com/login');
await expect(page.getByRole('link', { name: 'olena015' })).toContainText('olena015');

const newArticleLocator = page.locator('a[href="/editor"]') ;
await newArticleLocator.click();
await expect(page).toHaveURL('https://demo.learnwebdriverio.com/editor');

const articleTitleLocator = page.locator("input[class*='form-control-lg']");
await articleTitleLocator.fill('My first article');
const articleAboutLocator = page.locator(`input[placeholder*="What's "]`);
await articleAboutLocator.fill('Technology'); 
const articleDescription = page.locator('textarea[placeholder*="Write"]');
await articleDescription.fill("Microsoft said on Tuesday it was laying off less than 3% of its workforce, or around 6,000 employees, as the technology giant looks to rein in costs while funneling billions of dollars into its ambitious bet on artificial intelligence.");
const articlePublishBtn = page.locator('button[class*="btn-primary"]');
await articlePublishBtn.click();
await expect(page.getByTestId('article-title')).toContainText('My first article');
     });
     