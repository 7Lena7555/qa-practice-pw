import { Locator, Page } from '@playwright/test';

export class YourFeedPage{
    page: Page;
    yourFeedLinkLocator: Locator;
  
    constructor(page: Page){
     this.page = page;
     this.yourFeedLinkLocator = this.page.getByText('Your Feed');     
}

    async yourFeedRedirect() {
    await this.yourFeedLinkLocator.click(); 
  }
}