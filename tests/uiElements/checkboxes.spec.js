import { test, expect } from "@playwright/test";

test.describe("Checkboxes", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:4200/");
    await page.getByText("Modal & Overlays").click();
    await page.getByText("Toastr").click();
  });

  test("Check one checkbox", async ({ page }) => {
    await page.getByRole('checkbox', { name: 'Hide on click' }).uncheck({ force: true });
    await page.getByRole('checkbox', { name: 'Prevent arising of duplicate' }).check({ force: true });

    await expect(page.getByRole('checkbox', { name: 'Hide on click' })).not.toBeChecked();
    await expect(page.getByRole('checkbox', { name: 'Prevent arising of duplicate' })).toBeChecked();
  })

  test("Check all checkboxes", async ({ page }) => {
    await page.getByRole('checkbox', { name: 'Hide on click' }).uncheck({ force: true });

    const allCheckboxes = page.getByRole('checkbox');
    //create an array from allCheckboxes (using .all) and iterate it
    for (const box of await allCheckboxes.all()) {
      await box.check({ force: true });
      expect(await box.isChecked()).toBeTruthy();
    }
  })

  test("Uncheck all checkboxes", async ({ page }) => {
    await page.getByRole('checkbox', { name: 'Prevent arising of duplicate' }).check({ force: true });

    const allCheckboxes = page.getByRole('checkbox');
    for (let box of await allCheckboxes.all()) {
      await box.uncheck({ force: true });
      expect(await box.isChecked()).toBeFalsy();
    }
  })

})
