import { Locator, Page } from '@playwright/test';
 
// export function LoginPage1 (page: Page) {
// this.signInLinkLocator = page.getByText('Sign in');
// this.emailFieldLocator = page.locator('[placeholder="Email"]');
// this.passwordFieldLocator = page.locator('[placeholder="Password"]');
// this.signInButtonLocator = page.locator('button[class*=" btn-primary"]');
    

// this.loginUser = async function (
//     email: string = 'olena12345@gmail.com',
//     password: string ='olena12345'
// ) {
//     await this.signInLinkLocator.click();
//     await this.emailFieldLocator.fill(email);
//     await this.passwordFieldLocator.fill(password);
//     await this.signInButtonLocator.click();
// };
 
// }
export class LoginPage{
    page: Page;
    signInLinkLocator: Locator;
    emailFieldLocator: Locator;
    passwordFieldLocator: Locator;
    signInButtonLocator: Locator;

    constructor(page: Page){
     this.page = page;
     this.signInLinkLocator = this.page.locator('[href="/login"]');
     this.emailFieldLocator = this.page.locator('[placeholder="Email"]');
     this.passwordFieldLocator = this.page.locator('[placeholder="Password"]');
     this.signInButtonLocator = this.page.locator('//button');
    }

      async loginUser(email: string = 'olenats@gmail.com', password: string = '192120dom!') {
    await this.signInLinkLocator.click();
    await this.emailFieldLocator.fill(email);
    await this.passwordFieldLocator.fill(password);
    await this.signInButtonLocator.click();
  }
}