import { test, expect } from "@playwright/test";

test("Browser Dialog Box", async ({ page }) => {
  await page.goto("/");
  await page.getByText("Tables & Data").click();
  await page.getByText("Smart Table").click();
  
  page.on('dialog', dialog => {
    expect(dialog.message()).toEqual('Are you sure you want to delete?');
    dialog.accept();
  })
  await expect(page.locator('table tbody tr').first()).toContainText('mdo@gmail.com');
  await page.getByRole('table').locator('tr', {hasText: 'mdo@gmail.com'}).locator('.nb-trash').click();
  await expect(page.locator('table tbody tr').first()).not.toContainText('mdo@gmail.com');
})