import { test, expect } from "@playwright/test";

test.describe("List and dropdowns", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("Dropdown menu: select one option", async ({ page }) => {
    const dropdownMenu = page.locator('ngx-header nb-select');
    await dropdownMenu.click();

    page.getByRole('list')//when list has <ul></ul>
    page.getByRole('listitem')//when list has <li></li>

    const header = page.locator('nb-layout-header');
    const optionList = page.locator('nb-option-list nb-option');

    await test.expect(optionList).toHaveText(['Light', 'Dark', 'Cosmic', 'Corporate']);
    await optionList.filter({ hasText: 'Cosmic' }).click();

    await expect(header).toHaveCSS('background-color', 'rgb(50, 50, 89)');
  });

  test("Dropdown menu: check all options", async ({ page }) => {
    const header = page.locator('nb-layout-header');
    const dropdownMenu = page.locator('ngx-header nb-select');
    const optionList = page.locator('nb-option-list nb-option');

    const colors = {
      'Light': 'rgb(255, 255, 255)',
      'Dark': 'rgb(34, 43, 69)',
      'Cosmic': 'rgb(50, 50, 89)',
      'Corporate': 'rgb(255, 255, 255)'
    }

    await dropdownMenu.click();
    for (const color in colors) {
      await optionList.filter({ hasText: color }).click();
      await expect(header).toHaveCSS('background-color', colors[color]);
      if (color !== 'Corporate')
        await dropdownMenu.click();
    }
  });
});