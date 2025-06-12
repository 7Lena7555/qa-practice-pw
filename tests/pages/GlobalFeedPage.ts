import { Locator, Page } from '@playwright/test';

export class GlobalFeedPage{
    page: Page;
    globalFeedLinkLocator: Locator;
  
    constructor(page: Page){
     this.page = page;
     this.globalFeedLinkLocator = this.page.getByText('Global Feed');     
}

    async globalFeedRedirect() {
    await this.globalFeedLinkLocator.click(); 
  }
}