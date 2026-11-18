
import { test, expect } from '@playwright/test';

test('Invalid Login', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/');

    await page.locator('.ico-login').click();

    await page.locator('#Email').fill('wronguser123@gmail.com');

    await page.locator('#Password').fill('WrongPass123!');
    await page.locator('input.button-1.login-button').click();
    await expect(page.getByText('No customer account found')).toBeVisible();
});
