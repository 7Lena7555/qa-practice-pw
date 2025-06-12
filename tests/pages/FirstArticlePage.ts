import { Locator, Page } from '@playwright/test';

export class FirstArticlePage{
    page: Page;
    firstArticleLocator: Locator;
  
    constructor(page: Page){
     this.page = page;
     this.firstArticleLocator = this.page.locator('(//h1[text()="NEW TITLE UPDATE"])[1]');     
}

    async articleRedirect() {
    await this.firstArticleLocator.click(); 

    
  }
}