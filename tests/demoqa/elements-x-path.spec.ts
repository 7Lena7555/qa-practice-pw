
// 1) Напишіть прості тести на вкладки 
//  - text box 
//  - check box
//  - radio buttons
//  - buttons

// 2) Використовуйте лише з xpath для знаходження елементів

// ⭐️ сайт має рекламу, спробуйте знайти спосіб її заблокувати під час виконання тесту щоб вона вам не заважала.  Працюйте з нетворк реквестами. 

import { test , expect } from '@playwright/test';
const baseURL = 'https://demoqa.com/text-box';

test.beforeEach(async ({ page, context }) => {

  await context.route(/ads/, (route) => route.abort());
  await page.goto(baseURL);  
});

test('DQ-01 shoud fill in text box fields x-path',
    { tag: "@textbox" }, async ({ page }) => {
  await page.locator('//input[@placeholder="Full Name"]').fill('Bob Johnson');
  await page.locator('//input[@placeholder="name@example.com"]').fill('bob23@gmail.com');
  await page.locator('//textarea[@id="currentAddress"]').fill('Chicago');
  await page.locator('//textarea[@id="permanentAddress"]').fill('Main Street 23');
  await page.locator('//button[contains(text(), "Submit")]').click();
});

test('DQ-02 should click on check box field x-path',
     { tag: "@checkbox" }, async ({ page }) => {
  await page.locator(`//ul[@class='menu-list']/li[@id='item-1']/span[@class='text' and text()='Check Box']`).click({force: true});

  await page.locator('//div[@class="rct-options"]/button[@aria-label="Expand all"]').click({force: true});
  await page.locator("//"+"*[text()='Desktop']").click();
  await page.locator("//span[text()='Desktop']/../../button").click();
 });

test('DQ-03 should click on radio buttons with x-path',
    { tag: "@radiobtn" }, async ({ page }) => {
  // await page.locator(`//span[@class='text' and text()='Radio Button']`).click();
  // await page.locator('//input[@id="yesRadio" ]').click(); // doesn`t work
  await page.locator(`//span[@class='text' and text()='Radio Button']`).click();
  await page.locator('//label[@for="yesRadio"]').waitFor({ state: 'visible', timeout: 10000 });
  await page.locator('//label[@for="yesRadio"]').click();
});

test('DQ-04 should click on buttons with x-path',
    { tag: "@btns" }, async ({ page }) => {
  await page.locator(`//span[@class='text' and text()='Buttons']`).click();
  await page.locator('//button[text()="Double Click Me"]').dblclick();
  await page.locator('//button[text()="Right Click Me"]').click({ button: 'right' });
  await page.locator('//button[text()="Click Me"]').click();
});

