const { test, expect} = require('@playwright/test')

test('test', async ({ page }) => {
  // Go to https://login.moonable.dev/
  await page.goto('https://login.moonable.dev/');
  // Click [placeholder="Email"]
  await page.locator('[placeholder="Email"]').click();
  // Fill [placeholder="Email"]
  await page.locator('[placeholder="Email"]').type('niurka+03@moonable.eu');
  // Click [placeholder="Password"]
  await page.locator('[placeholder="Password"]').click();
  // Fill [placeholder="Password"]
  await page.locator('[placeholder="Password"]').type('Mn35822.');
  // Click text=Log In
  await page.locator('text=Log In').click();
  await expect(page).toHaveURL(/.*tfa/);
});


