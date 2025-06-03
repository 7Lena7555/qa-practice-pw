# Test info

- Name: CD-05 user should publish 3 articles successfully
- Location: C:\Users\Lena\OneDrive\Documents\qa-practice-pw\tests\function-practice-conduit\publish-article.spec.ts:6:5

# Error details

```
Error: page.waitForSelector: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('[data-testid="article-title"]') to be visible

    at publishArticle (C:\Users\Lena\OneDrive\Documents\qa-practice-pw\tests\pages\article-page.ts:19:14)
    at C:\Users\Lena\OneDrive\Documents\qa-practice-pw\tests\function-practice-conduit\publish-article.spec.ts:21:5
```

# Page snapshot

```yaml
- navigation:
  - link "conduit":
    - /url: /
  - list:
    - listitem:
      - link "Home":
        - /url: /
    - listitem:
      - link " New Article":
        - /url: /editor
    - listitem:
      - link " Settings":
        - /url: /settings
    - listitem:
      - link "fewjgwje":
        - /url: /@fewjgwje/
- 'heading "My article #1" [level=1]'
- link:
  - /url: /@fewjgwje/
  - img
- link "fewjgwje":
  - /url: /@fewjgwje/
- text: May 29, 2025
- link " Edit Article":
  - /url: /editor/my-article-1-2ne7jh
- button " Delete Article"
- paragraph: This is article 1. Content goes here.
- list
- separator
- link:
  - /url: /@fewjgwje/
  - img
- link "fewjgwje":
  - /url: /@fewjgwje/
- text: May 29, 2025
- link " Edit Article":
  - /url: /editor/my-article-1-2ne7jh
- button " Delete Article"
- list
- textbox "Write a comment..."
- img
- button "Post Comment"
- contentinfo:
  - link "conduit":
    - /url: /
  - text: An interactive learning project from
  - link "Thinkster":
    - /url: https://thinkster.io
  - text: . Code & design licensed under MIT.
```

# Test source

```ts
   1 | import { Page } from '@playwright/test';
   2 |
   3 | export interface ArticleData {
   4 |   title: string;
   5 |   about: string;
   6 |   content: string;
   7 | }
   8 |
   9 | export async function publishArticle(page: Page, article: ArticleData): Promise<void> {
  10 |   await page.click('a[href="/editor"]');
  11 |   await page.waitForURL('https://demo.learnwebdriverio.com/editor');
  12 |
  13 |   await page.locator("input[class*='form-control-lg']").fill(article.title);
  14 |   await page.locator(`input[placeholder*="What's "]`).fill(article.about);
  15 |   await page.locator('textarea[placeholder*="Write"]').fill(article.content);
  16 |
  17 |   await page.locator('button[class*="btn-primary"]').click();
  18 |
> 19 |   await page.waitForSelector('[data-testid="article-title"]');
     |              ^ Error: page.waitForSelector: Test timeout of 30000ms exceeded.
  20 | }
```