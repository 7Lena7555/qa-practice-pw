# Test info

- Name: DQ-03 radio buttons with x-path
- Location: C:\Users\Lena\OneDrive\Documents\qa-practice-pw\tests\demoqa\elements-x-path.spec.ts:40:5

# Error details

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//input[@id="yesRadio" ]')
    - locator resolved to <input name="like" type="radio" id="yesRadio" class="custom-control-input"/>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <label for="yesRadio" class="custom-control-label">Yes</label> intercepts pointer events
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <label for="yesRadio" class="custom-control-label">Yes</label> intercepts pointer events
    - retrying click action
      - waiting 100ms
    51 × waiting for element to be visible, enabled and stable
       - element is visible, enabled and stable
       - scrolling into view if needed
       - done scrolling
       - <label for="yesRadio" class="custom-control-label">Yes</label> intercepts pointer events
     - retrying click action
       - waiting 500ms
    - waiting for element to be visible, enabled and stable

    at C:\Users\Lena\OneDrive\Documents\qa-practice-pw\tests\demoqa\elements-x-path.spec.ts:43:50
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
- heading "Radio Button" [level=1]
- text: Do you like the site?
- radio "Yes"
- text: "Yes"
- radio "Impressive"
- text: Impressive
- radio "No" [disabled]
- text: "No"
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
  32 |   await page.locator(`//ul[@class='menu-list']/li[@id='item-1']/span[@class='text' and text()='Check Box']`).click({force: true});
  33 |
  34 |   await page.locator('//div[@class="rct-options"]/button[@aria-label="Expand all"]').click({force: true});
  35 |
  36 |   await page.locator(`//span[text()='Desktop']`).click();
  37 |   await page.locator("//span[text()='Desktop']/../../button").click();
  38 |  });
  39 |
  40 | test('DQ-03 radio buttons with x-path',
  41 |     { tag: "@radiobtn" }, async ({ page }) => {
  42 |   await page.locator(`//span[@class='text' and text()='Radio Button']`).click();
> 43 |   await page.locator('//input[@id="yesRadio" ]').click();
     |                                                  ^ Error: locator.click: Test timeout of 30000ms exceeded.
  44 | });
  45 |
  46 |
```