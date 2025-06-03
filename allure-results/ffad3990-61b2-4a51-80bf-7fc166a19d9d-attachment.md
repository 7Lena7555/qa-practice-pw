# Test info

- Name: C-01 user should login successfully
- Location: C:\Users\Lena\OneDrive\Documents\qa-practice-pw\tests\conduit\login.spec.ts:3:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('h1.text-xs-center')

    at C:\Users\Lena\OneDrive\Documents\qa-practice-pw\tests\conduit\login.spec.ts:6:41
```

# Test source

```ts
   1 | import { test , expect } from '@playwright/test';
   2 |
   3 | test('C-01 user should login successfully',
   4 |      { tag: "@login" }, async ({ page }) => {
   5 | await page.goto('https://demo.learnwebdriverio.com/');
>  6 | await page.locator('h1.text-xs-center').click();
     |                                         ^ Error: locator.click: Target page, context or browser has been closed
   7 | await page.locator('input[placeholder="Email"]').fill('olena124551@gmail.com');
   8 | await page.locator('input[placeholder="Password"]').fill('admin124551');
   9 | await page.locator('.btn btn-lg btn-primary pull-xs-right').click();
  10 | await expect(page).toHaveURL('https://demo.learnwebdriverio.com/login');
  11 | await expect(page.getByRole('link', { name: 'olena124551' })).toContainText('olena124551');
  12 |
  13 | });
  14 |
```