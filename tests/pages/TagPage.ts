import { Locator, Page } from '@playwright/test';

export class TagPage{
    page: Page;
    tagLocator: Locator;
  
    constructor(page: Page){
     this.page = page;
     this.tagLocator = this.page.locator('[class*=" tag-default"][href="/tag/dojo"]');     
}

    async tagRedirect() {
    await this.tagLocator.click(); 
  }
}