import { test, expect } from "@playwright/test";
import { NavigationPage } from "../page_objects/navigationPage";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:4200/");
});

test("Navigation menu", async ({ page }) => {
  const navigateTo = new NavigationPage(page);

  await navigateTo.formLayoutsPage();
  await navigateTo.datepickerPage();
  await navigateTo.toastrPage();
  await navigateTo.tooltipPage();
  await navigateTo.smartTablePage();
});
