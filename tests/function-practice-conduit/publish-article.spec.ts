import { test, expect } from '@playwright/test';
import { registerUser, generateTestUser } from '../pages/register-page';
import { publishArticle, ArticleData } from '../pages/article-page';

test('CD-01 user should publish 3 articles successfully', { tag: '@article' }, async ({ page }) => {
  await page.goto('https://demo.learnwebdriverio.com/');
  await page.click('a[href="/register"]');
  await page.waitForSelector("h1[class*='text-xs-center']");

  const user = generateTestUser();
  await registerUser(page, user);

  for (let i = 1; i <= 3; i++) {
    const article: ArticleData = {
      title: `My article #${i}`,
      about: `About topic ${i}`,
      content: `This is article ${i}.`,
    };

    await publishArticle(page, article);
    await expect(page.getByTestId('article-title')).toContainText(article.title);
  }
});
