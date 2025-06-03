import { test , expect } from '@playwright/test';

test('C-04 should follow by user',
     { tag: "@article" }, async ({ page }) => {await page.goto('https://demo.learnwebdriverio.com/');
await page.goto('https://demo.learnwebdriverio.com/');
await page.getByText('Sign in').click();
await page.locator('input[placeholder="Email"]').fill('olena012@gmail.com');
await page.locator('input[placeholder="Password"]').fill('admin012');
await page.locator('button').click();
await expect(page).toHaveURL('https://demo.learnwebdriverio.com/login');;

await page.getByRole('link', { name: 'Global Feed' }).waitFor({ state: 'visible' });
  // await page.locator('//a[@class="page-link" and text() = "2"]').click();
const testingLink = page.getByRole('link', { name: 'raymondtest' }).first();
await testingLink.waitFor({ state: 'visible', timeout: 10000 });
const articlePreview = page.locator('.article-preview').filter({ has: testingLink });
await expect(articlePreview).toContainText('testArticleRaymond', { timeout: 10000 });
const articleLink = articlePreview.getByRole('link', { name: 'testArticleRaymond' });
await articleLink.click();
 
const followButton = page.locator('[data-qa-id="follow-toggle"]');
await followButton.waitFor({ state: 'visible' });
await expect(followButton).toContainText('Follow');
await followButton.click();
await expect(followButton).toContainText('Unfollow');
await followButton.click();
await page.getByRole('link', { name: 'Global Feed' }).waitFor({ state: 'visible', timeout: 10000 });
  
});