# Test info

- Name: C-04 user should published article successfully
- Location: C:\Users\Lena\OneDrive\Documents\qa-practice-pw\tests\variable-practice\create-article.spec.ts:3:5

# Error details

```
Error: locator.fill: Error: Element is not an <input>, <textarea>, <select> or [contenteditable] and does not have a role allowing [aria-readonly]
Call log:
  - waiting for locator('div[class*="input-wrapper"]')
    - locator resolved to <div data-v-7a63e4b3="" class="content-input-wrapper">…</div>
    - fill("Microsoft said on Tuesday it was laying off less than 3% of its workforce, or around 6,000 employees, as the technology giant looks to rein in costs while funneling billions of dollars into its ambitious bet on artificial intelligence.")
  - attempting fill action
    - waiting for element to be visible, enabled and editable

    at C:\Users\Lena\OneDrive\Documents\qa-practice-pw\tests\variable-practice\create-article.spec.ts:22:26
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
      - link "olena015":
        - /url: /@olena015/
- list
- group:
  - group:
    - textbox "Article Title": My first article
  - group:
    - textbox "What's this article about?": Technology
  - group:
    - textbox "Write your article (in markdown)"
  - group:
    - textbox "Enter tags"
- button "Publish Article"
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
   1 | import { test , expect } from '@playwright/test';
   2 |
   3 | test('C-04 user should published article successfully',
   4 |      { tag: "@article" }, async ({ page }) => {
   5 | await page.goto('https://demo.learnwebdriverio.com/');
   6 | await page.getByText('Sign in').click();
   7 | await page.locator('input[placeholder="Email"]').fill('olena015@gmail.com');
   8 | await page.locator('input[placeholder="Password"]').fill('admin015');
   9 | await page.locator('button').click();
  10 | await expect(page).toHaveURL('https://demo.learnwebdriverio.com/login');
  11 | await expect(page.getByRole('link', { name: 'olena015' })).toContainText('olena015');
  12 |
  13 | const newArticleLocator = page.locator('a[href="/editor"]') ;
  14 | await newArticleLocator.click();
  15 | await expect(page).toHaveURL('https://demo.learnwebdriverio.com/editor');
  16 |
  17 | const articleTitleLocator = page.locator("input[class*='form-control-lg']");
  18 | await articleTitleLocator.fill('My first article');
  19 | const articleAboutLocator = page.locator(`input[placeholder*="What's "]`);
  20 | await articleAboutLocator.fill('Technology'); 
  21 | const articleDescription = page.locator('div[class*="input-wrapper"]');
> 22 | await articleDescription.fill("Microsoft said on Tuesday it was laying off less than 3% of its workforce, or around 6,000 employees, as the technology giant looks to rein in costs while funneling billions of dollars into its ambitious bet on artificial intelligence.");
     |                          ^ Error: locator.fill: Error: Element is not an <input>, <textarea>, <select> or [contenteditable] and does not have a role allowing [aria-readonly]
  23 | const articlePublishBtn = page.locator('button[class*="btn-primary"]');
  24 | await articlePublishBtn.click();
  25 | await expect(page.getByTestId('article-title')).toContainText('My first article');
  26 |      });
  27 |      
```