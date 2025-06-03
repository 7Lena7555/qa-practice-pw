# Test info

- Name: C-01 user should login successfully
- Location: C:\Users\Lena\OneDrive\Documents\qa-practice-pw\tests\conduit\login.spec.ts:3:5

# Error details

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByText('Sigh in')

    at C:\Users\Lena\OneDrive\Documents\qa-practice-pw\tests\conduit\login.spec.ts:6:33
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
      - link " Sign in":
        - /url: /login
    - listitem:
      - link " Sign up":
        - /url: /register
- heading "conduit" [level=1]
- paragraph: A place to share your knowledge.
- list:
  - listitem:
    - link "Global Feed":
      - /url: /
- link:
  - /url: /@testuser/
  - img
- link "testuser":
  - /url: /@testuser/
- text: May 16, 2025
- button " 1"
- link "testArticle_2 This is about a test 2test test test by it 2 Read more...":
  - /url: /articles/testarticle-7pwpbj
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
- link "testArticle This is about a testtest test test by it Read more...":
  - /url: /articles/testarticle-o3rky5
  - heading "testArticle" [level=1]
  - paragraph: This is about a testtest test test by it
  - text: Read more...
  - list
- link:
  - /url: /@testuser/
  - img
- link "testuser":
  - /url: /@testuser/
- text: May 16, 2025
- button " 0"
- link "testArticle This is about a testtest test test by it Read more...":
  - /url: /articles/testarticle-71n8jm
  - heading "testArticle" [level=1]
  - paragraph: This is about a testtest test test by it
  - text: Read more...
  - list
- link:
  - /url: /@testuser/
  - img
- link "testuser":
  - /url: /@testuser/
- text: May 16, 2025
- button " 0"
- link "testArticle This is about a testtest test test by it Read more...":
  - /url: /articles/testarticle-89zho9
  - heading "testArticle" [level=1]
  - paragraph: This is about a testtest test test by it
  - text: Read more...
  - list
- link:
  - /url: /@testuser/
  - img
- link "testuser":
  - /url: /@testuser/
- text: May 16, 2025
- button " 0"
- link "testArticle This is about a testtest test test by it Read more...":
  - /url: /articles/testarticle-vrxd5r
  - heading "testArticle" [level=1]
  - paragraph: This is about a testtest test test by it
  - text: Read more...
  - list
- link:
  - /url: /@testuser/
  - img
- link "testuser":
  - /url: /@testuser/
- text: May 16, 2025
- button " 0"
- link "testArticle This is about a testtest test test by it Read more...":
  - /url: /articles/testarticle-f22v2x
  - heading "testArticle" [level=1]
  - paragraph: This is about a testtest test test by it
  - text: Read more...
  - list
- link:
  - /url: /@testuser/
  - img
- link "testuser":
  - /url: /@testuser/
- text: May 16, 2025
- button " 0"
- link "testArticle This is about a testtest test test by it Read more...":
  - /url: /articles/testarticle-9w4jze
  - heading "testArticle" [level=1]
  - paragraph: This is about a testtest test test by it
  - text: Read more...
  - list
- link:
  - /url: /@testuser/
  - img
- link "testuser":
  - /url: /@testuser/
- text: May 16, 2025
- button " 0"
- link "test about test Read more...":
  - /url: /articles/test-yn2euy
  - heading "test" [level=1]
  - paragraph: about test
  - text: Read more...
  - list
- link:
  - /url: /@testuser/
  - img
- link "testuser":
  - /url: /@testuser/
- text: May 16, 2025
- button " 1"
- link "testArticle This is about a testtest test test by it Read more...":
  - /url: /articles/testarticle-gh3jcg
  - heading "testArticle" [level=1]
  - paragraph: This is about a testtest test test by it
  - text: Read more...
  - list
- link:
  - /url: /@testuser/
  - img
- link "testuser":
  - /url: /@testuser/
- text: May 16, 2025
- button " 0"
- link "testArticle_2 This is about a test 2 Read more...":
  - /url: /articles/testarticle-eefk2h
  - heading "testArticle_2" [level=1]
  - paragraph: This is about a test 2
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
   3 | test('C-01 user should login successfully',
   4 |      { tag: "@login" }, async ({ page }) => {
   5 | await page.goto('https://demo.learnwebdriverio.com/');
>  6 | await page.getByText('Sigh in').click();
     |                                 ^ Error: locator.click: Test timeout of 30000ms exceeded.
   7 | await page.locator('input[placeholder="Email"]').fill('olena124551@gmail.com');
   8 | await page.locator('input[placeholder="Password"]').fill('admin124551');
   9 | await page.locator('.btn btn-lg btn-primary pull-xs-right').click();
  10 | await expect(page).toHaveURL('https://demo.learnwebdriverio.com/login');
  11 | await expect(page.getByRole('link', { name: 'olena124551' })).toContainText('olena124551');
  12 |
  13 | });
  14 |
```