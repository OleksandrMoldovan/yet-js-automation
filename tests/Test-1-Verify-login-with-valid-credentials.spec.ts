import { expect, test } from "@playwright/test"



test('Verify login with valid credentials', async ({ page }) => {
  const emailLocator = '#email'
  const passwordLocator = '#password'
  const email = 'customer@practicesoftwaretesting.com'
  const password = 'welcome01'
  const submitLocator = '.btnSubmit'
  const titleLocator = `h1[data-test = 'page-title']`


  await page.goto('/auth/login');
  await page.locator(emailLocator).fill(email)
  await page.locator(passwordLocator).fill(password)
  await page.locator(submitLocator).click()

  await expect(page).toHaveURL('/account')

  await expect(page.locator(titleLocator)).toHaveText('My account')

  //await expect(page.getByRole('heading',{ name: 'My account' })).toBeVisible();
  await expect(page.locator('a#menu')).toHaveText('Jane Doe')
})