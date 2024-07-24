import { test, expect } from "@playwright/test";

test.describe("Web Tables", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:4200/");
    await page.getByText("Tables & Data").click();
    await page.getByText("Smart Table").click();
  });

  test("Modify the value 'Age' in a table cell", async ({ page }) => {
    //get the row by any text in this row
    const targetRow = page.getByRole('row', {name: 'mdo@gmail.com'}); 
    await targetRow.locator('.nb-edit').click();
    await page.locator('input-editor').getByPlaceholder('Age').clear();
    await page.locator('input-editor').getByPlaceholder('Age').fill('33');
    await page.locator('.nb-checkmark').click();

    await expect(targetRow).toContainText('33');
  })

  test("Modify the value 'E-mail' in a table cell by the specific column", async ({ page }) => {
    //get the row based on the value in the specific column
    await page.locator('.ng2-smart-pagination-nav').getByText('2').click(); //nzvigation on the second page
    const targetRowById = page.getByRole('row', {name: '11'}).filter({has: page.locator('td').nth(1).getByText('11')}); 
    await targetRowById.locator('.nb-edit').click();
    await page.locator('input-editor').getByPlaceholder('E-mail').clear();
    await page.locator('input-editor').getByPlaceholder('E-mail').fill('test@test.com');
    await page.locator('.nb-checkmark').click();

    await expect(targetRowById.locator('td').nth(5)).toHaveText('test@test.com');
  })
})