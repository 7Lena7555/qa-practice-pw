# Test info

- Name: C-03 user should published article successfully
- Location: C:\Users\Lena\OneDrive\Documents\qa-practice-pw\tests\conduit\create-article.spec.ts:3:5

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toHaveURL(expected)

Locator: locator(':root')
Expected string: "https://demo.learnwebdriverio.com/login"
Received string: "https://demo.learnwebdriverio.com/"
Call log:
  - expect.toHaveURL with timeout 5000ms
  - waiting for locator(':root')
    8 × locator resolved to <html lang="en">…</html>
      - unexpected value "https://demo.learnwebdriverio.com/"

    at C:\Users\Lena\OneDrive\Documents\qa-practice-pw\tests\conduit\create-article.spec.ts:10:20
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
      - link "olena124551":
        - /url: /@olena124551/
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
  - /url: /@olena124551/
  - img
- link "olena124551":
  - /url: /@olena124551/
- text: May 14, 2025
- button " 0"
- link "My first article Technology Read more...":
  - /url: /articles/my-first-article-kjpl1r
  - heading "My first article" [level=1]
  - paragraph: Technology
  - text: Read more...
  - list
- link:
  - /url: /@raymond/
  - img
- link "raymond":
  - /url: /@raymond/
- text: May 14, 2025
- button " 0"
- link "testArticleRaymond Just title Read more...":
  - /url: /articles/testarticleraymond-v6sa6n
  - heading "testArticleRaymond" [level=1]
  - paragraph: Just title
  - text: Read more...
  - list
- link:
  - /url: /@raymond/
  - img
- link "raymond":
  - /url: /@raymond/
- text: May 14, 2025
- button " 0"
- link "testArticleRaymond Just title Read more...":
  - /url: /articles/testarticleraymond-ob9ar6
  - heading "testArticleRaymond" [level=1]
  - paragraph: Just title
  - text: Read more...
  - list
- link:
  - /url: /@raymond/
  - img
- link "raymond":
  - /url: /@raymond/
- text: May 14, 2025
- button " 0"
- link "testArticleRaymond Just title Read more...":
  - /url: /articles/testarticleraymond-58ja1u
  - heading "testArticleRaymond" [level=1]
  - paragraph: Just title
  - text: Read more...
  - list
- link:
  - /url: /@raymond/
  - img
- link "raymond":
  - /url: /@raymond/
- text: May 14, 2025
- button " 0"
- link "testArticleRaymond Just title Read more...":
  - /url: /articles/testarticleraymond-tvr7o8
  - heading "testArticleRaymond" [level=1]
  - paragraph: Just title
  - text: Read more...
  - list
- link:
  - /url: /@raymond/
  - img
- link "raymond":
  - /url: /@raymond/
- text: May 14, 2025
- button " 0"
- link "testArticleRaymond Just title Read more...":
  - /url: /articles/testarticleraymond-igxfj2
  - heading "testArticleRaymond" [level=1]
  - paragraph: Just title
  - text: Read more...
  - list
- link:
  - /url: /@raymond/
  - img
- link "raymond":
  - /url: /@raymond/
- text: May 14, 2025
- button " 0"
- link "testArticleRaymond Just title Read more...":
  - /url: /articles/testarticleraymond-w9fv4p
  - heading "testArticleRaymond" [level=1]
  - paragraph: Just title
  - text: Read more...
  - list
- link:
  - /url: /@raymond/
  - img
- link "raymond":
  - /url: /@raymond/
- text: May 14, 2025
- button " 0"
- link "testArticleRaymond Just title Read more...":
  - /url: /articles/testarticleraymond-qc7awc
  - heading "testArticleRaymond" [level=1]
  - paragraph: Just title
  - text: Read more...
  - list
- link:
  - /url: /@raymond/
  - img
- link "raymond":
  - /url: /@raymond/
- text: May 14, 2025
- button " 0"
- link "qwe asd Read more...":
  - /url: /articles/qwe-8l60fb
  - heading "qwe" [level=1]
  - paragraph: asd
  - text: Read more...
  - list
- link:
  - /url: /@tea/
  - img
- link "tea":
  - /url: /@tea/
- text: May 14, 2025
- button " 1"
- link "Data visualization Data visualization Read more...":
  - /url: /articles/data-visualization-mgm3xj
  - heading "Data visualization" [level=1]
  - paragraph: Data visualization
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
- paragraph: Popular Tags
- link "demo":
  - /url: /tag/demo
- link "testing":
  - /url: /tag/testing
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
   3 | test('C-03 user should published article successfully',
   4 |      { tag: "@article" }, async ({ page }) => {
   5 | await page.goto('https://demo.learnwebdriverio.com/');
   6 | await page.getByRole('link', { name: 'Sign in' }).click();
   7 | await page.getByRole('textbox', { name: 'Email' }).fill('olena124551@gmail.com');
   8 | await page.getByRole('textbox', { name: 'Password' }).fill('admin124551');
   9 | await page.getByRole('button', { name: 'Sign in' }).click();
> 10 | await expect(page).toHaveURL('https://demo.learnwebdriverio.com/login');
     |                    ^ Error: Timed out 5000ms waiting for expect(locator).toHaveURL(expected)
  11 | await expect(page.getByRole('link', { name: 'olena124551' })).toContainText('olena124551');
  12 |  
  13 | await page.getByText('New Article').click();
  14 | await expect(page).toHaveURL('https://demo.learnwebdriverio.com/editor');
  15 | await page.getByRole('textbox', { name: 'Article Title' }).fill('My first article');
  16 | await page.getByRole('textbox', { name: 'What\'s this article about?' }).fill('Technology'); 
  17 | await page.getByRole('textbox', { name: 'Write your article (in' }).fill("Microsoft said on Tuesday it was laying off less than 3% of its workforce, or around 6,000 employees, as the technology giant looks to rein in costs while funneling billions of dollars into its ambitious bet on artificial intelligence.");
  18 | await page.getByRole('button', { name: 'Publish Article' }).click();
  19 | // await expect(page).toHaveURL('https://demo.learnwebdriverio.com/articles/my-first-article-usj3az');
  20 | await expect(page.locator('#app > div > div.banner > div > h1')).toContainText('My first article');
  21 |      });
```