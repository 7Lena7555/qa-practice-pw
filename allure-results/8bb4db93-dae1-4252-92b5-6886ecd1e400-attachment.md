# Test info

- Name: C-05 should added comment
- Location: C:\Users\Lena\OneDrive\Documents\qa-practice-pw\tests\conduit\add-comments.spec.ts:3:5

# Error details

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByTestId('preview-title').first()

    at C:\Users\Lena\OneDrive\Documents\qa-practice-pw\tests\conduit\add-comments.spec.ts:13:49
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
- heading "conduit" [level=1]
- paragraph: A place to share your knowledge.
- list:
  - listitem:
    - link "Your Feed":
      - /url: /my-feed
  - listitem:
    - link "Global Feed":
      - /url: /
- link:
  - /url: /@testuser/
  - img
- link "testuser":
  - /url: /@testuser/
- text: May 16, 2025
- button " 0"
- link "a Read more...":
  - /url: /articles/a-itakxp
  - heading "a" [level=1]
  - paragraph
  - text: Read more...
  - list
- link:
  - /url: /@testuser/
  - img
- link "testuser":
  - /url: /@testuser/
- text: May 16, 2025
- button " 0"
- link "testArticle_3 Read more...":
  - /url: /articles/testarticle_3-3yokdj
  - heading "testArticle_3" [level=1]
  - paragraph
  - text: Read more...
  - list
- link:
  - /url: /@olena012/
  - img
- link "olena012":
  - /url: /@olena012/
- text: May 16, 2025
- button " 0"
- link "My first article Technology Read more...":
  - /url: /articles/my-first-article-8pvq4w
  - heading "My first article" [level=1]
  - paragraph: Technology
  - text: Read more...
  - list
- link:
  - /url: /@olena012/
  - img
- link "olena012":
  - /url: /@olena012/
- text: May 16, 2025
- button " 0"
- link "My first article Technology Read more...":
  - /url: /articles/my-first-article-jc9bb7
  - heading "My first article" [level=1]
  - paragraph: Technology
  - text: Read more...
  - list
- link:
  - /url: /@olena012/
  - img
- link "olena012":
  - /url: /@olena012/
- text: May 16, 2025
- button " 1"
- link "My wgtwtdfe Read more...":
  - /url: /articles/my-4yzhrn
  - heading "My" [level=1]
  - paragraph: wgtwtdfe
  - text: Read more...
  - list
- link:
  - /url: /@olena012/
  - img
- link "olena012":
  - /url: /@olena012/
- text: May 16, 2025
- button " 0"
- link "sgr wgtwt Read more...":
  - /url: /articles/sgr-bto7l9
  - heading "sgr" [level=1]
  - paragraph: wgtwt
  - text: Read more...
  - list
- link:
  - /url: /@testuser/
  - img
- link "testuser":
  - /url: /@testuser/
- text: May 16, 2025
- button " 1"
- link "testArticle_2 This is about a test 2test test test by it 2 Read more...":
  - /url: /articles/testarticle-m2mh0m
  - heading "testArticle_2" [level=1]
  - paragraph: This is about a test 2test test test by it 2
  - text: Read more...
  - list
- link:
  - /url: /@testuser/
  - img
- link "testuser":
  - /url: /@testuser/
- text: May 16, 2025
- button " 0"
- link "testArticle_2 This is about a test 2test test test by it 2 Read more...":
  - /url: /articles/testarticle-ym9h1
  - heading "testArticle_2" [level=1]
  - paragraph: This is about a test 2test test test by it 2
  - text: Read more...
  - list
- link:
  - /url: /@testuser/
  - img
- link "testuser":
  - /url: /@testuser/
- text: May 16, 2025
- button " 1"
- link "testArticle_2 This is about a test 2test test test by it 2 Read more...":
  - /url: /articles/testarticle-hb2c0f
  - heading "testArticle_2" [level=1]
  - paragraph: This is about a test 2test test test by it 2
  - text: Read more...
  - list
- link:
  - /url: /@testuser/
  - img
- link "testuser":
  - /url: /@testuser/
- text: May 16, 2025
- button " 1"
- link "testArticle_2 This is about a test 2test test test by it 2 Read more...":
  - /url: /articles/testarticle-rtwwe8
  - heading "testArticle_2" [level=1]
  - paragraph: This is about a test 2test test test by it 2
  - text: Read more...
  - list
- navigation:
  - list:
    - listitem:
      - link "1":
        - /url: ""
    - listitem:
      - link "2":
        - /url: ""
    - listitem:
      - link "3":
        - /url: ""
    - listitem:
      - link "4":
        - /url: ""
    - listitem:
      - link "5":
        - /url: ""
- paragraph: Popular Tags
- link "demo":
  - /url: /tag/demo
- link "testing":
  - /url: /tag/testing
- link "playwright":
  - /url: /tag/playwright
- link "dojo":
  - /url: /tag/dojo
- link "qa":
  - /url: /tag/qa
- link "test":
  - /url: /tag/test
- link "cool":
  - /url: /tag/cool
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
   3 | test('C-05 should added comment',
   4 |      { tag: "@user" }, async ({ page }) => {
   5 | await page.goto('https://demo.learnwebdriverio.com/');
   6 | await page.getByText('Sign in').click();
   7 | await page.locator('input[placeholder="Email"]').fill('olena012@gmail.com');
   8 | await page.locator('input[placeholder="Password"]').fill('admin012');
   9 | await page.locator('button').click();
  10 | await expect(page).toHaveURL('https://demo.learnwebdriverio.com/login');
  11 | await expect(page.getByRole('link', { name: 'olena012' })).toContainText('olena012');
  12 |
> 13 | await page.getByTestId('preview-title').first().click();
     |                                                 ^ Error: locator.click: Test timeout of 30000ms exceeded.
  14 | await page.locator('//textarea').fill('Hello! Good job!');
  15 | await page.locator('button[class="btn btn-sm btn-primary"]').click();
  16 | await expect(page.getByText('Hello! Good job!').first()).toContainText('Hello! Good job!');
  17 |
  18 | });
```