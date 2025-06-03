# Test info

- Name: C-03 user should published article successfully
- Location: C:\Users\Lena\OneDrive\Documents\qa-practice-pw\tests\conduit\create-article.spec.ts:3:5

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toContainText(expected)

Locator: locator('article-title')
Expected string: "My first article"
Received: <element(s) not found>
Call log:
  - expect.toContainText with timeout 5000ms
  - waiting for locator('article-title')

    at C:\Users\Lena\OneDrive\Documents\qa-practice-pw\tests\conduit\create-article.spec.ts:21:45
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
      - link "olena012":
        - /url: /@olena012/
- heading "My first article" [level=1]
- link:
  - /url: /@olena012/
  - img
- link "olena012":
  - /url: /@olena012/
- text: May 16, 2025
- link " Edit Article":
  - /url: /editor/my-first-article-jc9bb7
- button " Delete Article"
- paragraph: Microsoft said on Tuesday it was laying off less than 3% of its workforce, or around 6,000 employees, as the technology giant looks to rein in costs while funneling billions of dollars into its ambitious bet on artificial intelligence.
- list
- separator
- link:
  - /url: /@olena012/
  - img
- link "olena012":
  - /url: /@olena012/
- text: May 16, 2025
- link " Edit Article":
  - /url: /editor/my-first-article-jc9bb7
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
   1 | import { test , expect } from '@playwright/test';
   2 |
   3 | test('C-03 user should published article successfully',
   4 |      { tag: "@article" }, async ({ page }) => {
   5 | await page.goto('https://demo.learnwebdriverio.com/');
   6 | await page.getByText('Sign in').click();
   7 | await page.locator('input[placeholder="Email"]').fill('olena012@gmail.com');
   8 | await page.locator('input[placeholder="Password"]').fill('admin012');
   9 | await page.locator('button').click();
  10 | await expect(page).toHaveURL('https://demo.learnwebdriverio.com/login');
  11 | await expect(page.getByRole('link', { name: 'olena012' })).toContainText('olena012');
  12 |  
  13 | await page.locator('a[href="/editor"]').click();
  14 | await expect(page).toHaveURL('https://demo.learnwebdriverio.com/editor');
  15 | await page.locator('input[placeholder="Article Title"]').fill('My first article');
  16 | await page.getByTestId('editor-description').fill('Technology'); 
  17 |      
  18 | await page.locator('//textarea').fill("Microsoft said on Tuesday it was laying off less than 3% of its workforce, or around 6,000 employees, as the technology giant looks to rein in costs while funneling billions of dollars into its ambitious bet on artificial intelligence.");
  19 | await page.getByTestId('editor-publish').click();
  20 | // await expect(page).toHaveURL('https://demo.learnwebdriverio.com/articles/my-first-article-usj3az');
> 21 | await expect(page.locator('article-title')).toContainText('My first article');
     |                                             ^ Error: Timed out 5000ms waiting for expect(locator).toContainText(expected)
  22 |      });
```