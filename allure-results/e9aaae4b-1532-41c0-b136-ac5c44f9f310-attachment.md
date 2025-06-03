# Test info

- Name: C-04 should follow by user
- Location: C:\Users\Lena\OneDrive\Documents\qa-practice-pw\tests\conduit\follow-user.spec.ts:3:5

# Error details

```
Error: expect.toContainText: Error: strict mode violation: getByRole('link', { name: 'testuser' }) resolved to 10 elements:
    1) <a class="author" href="/@testuser/" data-qa-type="author-name">↵      testuser↵    </a> aka locator('.author').first()
    2) <a class="author" href="/@testuser/" data-qa-type="author-name">↵      testuser↵    </a> aka locator('div:nth-child(2) > .article-meta > .info > .author')
    3) <a class="author" href="/@testuser/" data-qa-type="author-name">↵      testuser↵    </a> aka locator('div:nth-child(3) > .article-meta > .info > .author')
    4) <a class="author" href="/@testuser/" data-qa-type="author-name">↵      testuser↵    </a> aka locator('div:nth-child(4) > .article-meta > .info > .author')
    5) <a class="author" href="/@testuser/" data-qa-type="author-name">↵      testuser↵    </a> aka locator('div:nth-child(5) > .article-meta > .info > .author')
    6) <a class="author" href="/@testuser/" data-qa-type="author-name">↵      testuser↵    </a> aka locator('div:nth-child(6) > .article-meta > .info > .author')
    7) <a class="author" href="/@testuser/" data-qa-type="author-name">↵      testuser↵    </a> aka locator('div:nth-child(7) > .article-meta > .info > .author')
    8) <a class="author" href="/@testuser/" data-qa-type="author-name">↵      testuser↵    </a> aka locator('div:nth-child(8) > .article-meta > .info > .author')
    9) <a class="author" href="/@testuser/" data-qa-type="author-name">↵      testuser↵    </a> aka locator('div:nth-child(9) > .article-meta > .info > .author')
    10) <a class="author" href="/@testuser/" data-qa-type="author-name">↵      testuser↵    </a> aka locator('div:nth-child(10) > .article-meta > .info > .author')

Call log:
  - expect.toContainText with timeout 5000ms
  - waiting for getByRole('link', { name: 'testuser' })

    at C:\Users\Lena\OneDrive\Documents\qa-practice-pw\tests\conduit\follow-user.spec.ts:18:29
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
- link:
  - /url: /@testuser/
  - img
- link "testuser":
  - /url: /@testuser/
- text: May 16, 2025
- button " 1"
- link "testArticle_2 This is about a test 2test test test by it 2 Read more...":
  - /url: /articles/testarticle-gh8b8f
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
  - /url: /articles/testarticle-kqtp9p
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
- button " 1"
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
    - listitem:
      - link "6":
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
   3 | test('C-04 should follow by user',
   4 |      { tag: "@article" }, async ({ page }) => {await page.goto('https://demo.learnwebdriverio.com/');
   5 | await page.goto('https://demo.learnwebdriverio.com/');
   6 | await page.getByText('Sign in').click();
   7 | await page.locator('input[placeholder="Email"]').fill('olena012@gmail.com');
   8 | await page.locator('input[placeholder="Password"]').fill('admin012');
   9 | await page.locator('button').click();
  10 | await expect(page).toHaveURL('https://demo.learnwebdriverio.com/login');;
  11 |
  12 |   await page.getByRole('link', { name: 'Global Feed' }).waitFor({ state: 'visible' });
  13 |   await page.locator('//a[@class="page-link" and text() = "2"]').click();
  14 |
  15 |   
  16 |   const testingLink = page.getByRole('link', { name: 'testuser' });
  17 |   // await testingLink.waitFor({ state: 'visible', timeout: 10000 });
> 18 |   await expect(testingLink).toContainText('testArticle_2');
     |                             ^ Error: expect.toContainText: Error: strict mode violation: getByRole('link', { name: 'testuser' }) resolved to 10 elements:
  19 |   await testingLink.click();
  20 |
  21 |
  22 |   
  23 |
  24 |   const followButton = page.locator('[data-qa-id="follow-toggle"]');
  25 |   await followButton.waitFor({ state: 'visible' });
  26 |   await expect(followButton).toContainText('Follow');
  27 |   await followButton.click();
  28 |   await expect(followButton).toContainText('Unfollow');
  29 |   await followButton.click();
  30 |
  31 | });
```