import { test, expect } from "@playwright/test";

test.describe("Date Picker", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:4200/");
    await page.getByText("Forms").click();
    await page.getByText("Datepicker").click();
  });

  test("Select a date in the calendar", async ({ page }) => {
    const datePickerInputField = page.getByPlaceholder('Form Picker');
    await datePickerInputField.click();

    await page.locator('[class="day-cell ng-star-inserted"]').getByText('1', { exact: true }).click();
    await expect(datePickerInputField).toHaveValue("Jul 1, 2024");

  })
})