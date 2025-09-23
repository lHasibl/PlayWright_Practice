import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://app.projsite.com/sv/sign-in?redirect_url=https%3A%2F%2Fapp.projsite.com%2F');
  await page.getByRole('textbox', { name: 'E-postadress' }).click();
  await page.getByRole('textbox', { name: 'E-postadress' }).fill('hasibuzzaman25@gmail.com');
  await page.getByRole('button', { name: 'Fortsätt' }).click();
  await page.getByRole('textbox', { name: 'Lösenord' }).fill('1234H@sib');
  await page.getByRole('button', { name: 'Show password' }).click();
  await page.getByRole('button', { name: 'Fortsätt' }).dblclick();
  await page.goto('https://app.projsite.com/sv/my-company');
  await page.getByRole('button', { name: 'sv' }).click();
  await page.getByRole('button', { name: 'English' }).click();
  await page.getByRole('button', { name: 'Open user button' }).click();
  await page.getByRole('menuitem', { name: 'Sign out' }).click();
});