import { faker } from '@faker-js/faker';
import { Page } from '@playwright/test';

export interface RegisterData {
  username: string;
  email: string;
  password: string;
}

function generateUsername(): string {
  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const length = 8;
  let username = '';
  for (let i = 0; i < length; i++) {
    username += letters.charAt(Math.floor(Math.random() * letters.length));
  }
  return username;
}

export function generateTestUser(): RegisterData {
  return {
    username: generateUsername(),
    email: faker.internet.email(),
    password: faker.internet.password({ length: 12, memorable: false }),
  };
}

export async function registerUser(page: Page, data: RegisterData): Promise<void> {
  await page.fill('input[placeholder="Username"]', data.username);
  await page.fill('input[placeholder="Email"]', data.email);
  await page.fill('input[placeholder="Password"]', data.password);
  await page.click('button:has-text("Sign up")');

}



