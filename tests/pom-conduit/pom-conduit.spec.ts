import { test , expect, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { YourFeedPage } from '../pages/YourFeedPage';
import { GlobalFeedPage } from '../pages/GlobalFeedPage';
import { TagPage } from '../pages/TagPage';
import { FirstArticlePage } from '../pages/FirstArticlePage';

test.beforeEach(async ({ page }) => {
  await page.goto('https://demo.learnwebdriverio.com/');
});

test("user should login successfully",{ tag: "@login" }, async ({page, request}) => {
   const loginPage = new LoginPage(page);
   await loginPage.loginUser();
    
    await expect(page).toHaveURL('https://demo.learnwebdriverio.com/');
});

test("user should redirect to Your Feed page ", { tag: "@your_feed" }, async ({page, request}) => {
   const loginPage = new LoginPage(page);
   await loginPage.loginUser();

   const yourFeedPage = new YourFeedPage(page);
   await yourFeedPage.yourFeedRedirect();
    
   await expect(page).toHaveURL('https://demo.learnwebdriverio.com/my-feed');
});

test("user should redirect to Global Feed page", { tag: "@global_feed" }, async ({page, request}) => {
   const loginPage = new LoginPage(page);
   await loginPage.loginUser();

   const globalFeedPage = new GlobalFeedPage(page);
   await globalFeedPage.globalFeedRedirect();
    
   await expect(page).toHaveURL('https://demo.learnwebdriverio.com');

});

test("user should click on tag",{ tag: "@tag" }, async ({page, request}) => {
   const loginPage = new LoginPage(page);
   await loginPage.loginUser();

   const globalFeedPage = new GlobalFeedPage(page);
   await globalFeedPage.globalFeedRedirect();
    
   await expect(page).toHaveURL('https://demo.learnwebdriverio.com');

   const tagPage = new TagPage(page);
   await tagPage.tagRedirect();

   await expect(page).toHaveURL('https://demo.learnwebdriverio.com/tag/dojo');
});

test("user should click on the first article with dojo tag", { tag: "@tag" },async ({page, request}) => {
   const loginPage = new LoginPage(page);
   await loginPage.loginUser();

   const globalFeedPage = new GlobalFeedPage(page);
   await globalFeedPage.globalFeedRedirect();
    
   await expect(page).toHaveURL('https://demo.learnwebdriverio.com');

   const tagPage = new TagPage(page);
   await tagPage.tagRedirect();

   await expect(page).toHaveURL('https://demo.learnwebdriverio.com/tag/dojo');
   
   const firstArticlePage = new FirstArticlePage(page);
   await firstArticlePage.articleRedirect();
   await expect(page).toHaveURL('https://demo.learnwebdriverio.com/articles/test-article-4g87j4');
   
   const dojoTag = page.locator('a[href="/tag/dojo"]');
   await dojoTag.isVisible();
   
});



