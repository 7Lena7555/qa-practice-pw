# Test info

- Name: DQ-02 check box field x-path
- Location: C:\Users\Lena\OneDrive\Documents\qa-practice-pw\tests\demoqa\text-box.spec.ts:30:5

# Error details

```
TimeoutError: locator.waitFor: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('xpath=(//li[contains(@class, "rct-node") and .//span[@class="rct-title" and text()="Desktop"]]//button[@aria-label="Toggle"])[1]') to be visible

    at C:\Users\Lena\OneDrive\Documents\qa-practice-pw\tests\demoqa\text-box.spec.ts:34:148
```

# Page snapshot

```yaml
- img "adplus-dvertising"
- banner:
  - link:
    - /url: https://demoqa.com
    - img
- img
- text: Elements
- img
- list:
  - listitem:
    - img
    - text: Text Box
  - listitem:
    - img
    - text: Check Box
  - listitem:
    - img
    - text: Radio Button
  - listitem:
    - img
    - text: Web Tables
  - listitem:
    - img
    - text: Buttons
  - listitem:
    - img
    - text: Links
  - listitem:
    - img
    - text: Broken Links - Images
  - listitem:
    - img
    - text: Upload and Download
  - listitem:
    - img
    - text: Dynamic Properties
- img
- text: Forms
- img
- img
- text: Alerts, Frame & Windows
- img
- img
- text: Widgets
- img
- img
- text: Interactions
- img
- img
- text: Book Store Application
- img
- heading "Check Box" [level=1]
- button "Expand all":
  - img: 
- button "Collapse all":
  - img: 
- list:
  - listitem:
    - button "Toggle":
      - img: 
    - img: 
    - img: 
    - text: Home
- img "Build PlayWright tests with AI"
- contentinfo: © 2013-2020 TOOLSQA.COM | ALL RIGHTS RESERVED.
```

# Test source

```ts
   1 |
   2 | // 1) Напишіть прості тести на вкладки 
   3 | //  - text box 
   4 | //  - check box
   5 | //  - radio buttons
   6 | //  - buttons
   7 |
   8 | // 2) Використовуйте лише з xpath для знаходження елементів
   9 |
  10 | // ⭐️ сайт має рекламу, спробуйте знайти спосіб її заблокувати під час виконання тесту щоб вона вам не заважала.  Працюйте з нетворк реквестами. 
  11 |
  12 | import { test , expect } from '@playwright/test';
  13 | const baseURL = 'https://demoqa.com/text-box';
  14 |
  15 | test.beforeEach(async ({ page, context }) => {
  16 |
  17 |   await context.route(/ads/, (route) => route.abort());
  18 |   await page.goto(baseURL);  
  19 | });
  20 |
  21 | test('DQ-01 text box field x-path',
  22 |     { tag: "@textbox" }, async ({ page }) => {
  23 |   await page.locator('//input[@placeholder="Full Name"]').fill('Bob Johnson');
  24 |   await page.locator('//input[@placeholder="name@example.com"]').fill('bob23@gmail.com');
  25 |   await page.locator('//textarea[@id="currentAddress"]').fill('Chicago');
  26 |   await page.locator('//textarea[@id="permanentAddress"]').fill('Main Street 23');
  27 |   await page.locator('//button[contains(text(), "Submit")]').click();
  28 | });
  29 |
  30 | test('DQ-02 check box field x-path',
  31 |      { tag: "@checkbox" }, async ({ page }) => {
  32 |   await page.locator(`//ul[@class='menu-list']/li[@id='item-1']/span[@class='text' and text()='Check Box']`).click();
  33 |
> 34 |   await page.locator('(//li[contains(@class, "rct-node") and .//span[@class="rct-title" and text()="Desktop"]]//button[@aria-label="Toggle"])[1]').waitFor({ state: 'visible', timeout: 10000 });
     |                                                                                                                                                    ^ TimeoutError: locator.waitFor: Timeout 10000ms exceeded.
  35 |   await page.locator('(//li[contains(@class, "rct-node") and .//span[@class="rct-title" and text()="Desktop"]]//button[@aria-label="Toggle"])[1]').click();
  36 |
  37 |   await page.locator(`//span[text()='Desktop']`).click();
  38 |   await page.locator("//span[text()='Desktop']/../../button").click();
  39 |  
  40 | });
  41 |
  42 |
```