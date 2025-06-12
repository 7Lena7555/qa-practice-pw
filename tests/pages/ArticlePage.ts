import { Page } from '@playwright/test';

export interface ArticleData {
  title: string;
  about: string;
  content: string;
}

export async function publishArticle(page: Page, article: ArticleData): Promise<void> {
  await page.click('a[href="/editor"]');
 

  await page.locator("input[class*='form-control-lg']").fill(article.title);
  await page.locator(`input[placeholder*="What's "]`).fill(article.about);
  await page.locator('textarea[placeholder*="Write"]').fill(article.content);

  await page.locator('button[class*="btn-primary"]').click();

};