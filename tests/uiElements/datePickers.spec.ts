import { test, expect } from "@playwright/test";
import { NavigationPage } from "../../page_objects/navigationPage";
import { DatePickerPage } from "../../page_objects/datePickerPage";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:4200/");
});

test("Select Common DatePicker Date From Today", async ({ page }) => {
  const navigateTo = new NavigationPage(page);
  const datePickerPage = new DatePickerPage(page);

  await navigateTo.datepickerPage();
  await datePickerPage.selectCommonDatePickerDateFromToday(7);
  await datePickerPage.selectDatepickerWithRangeFromToday(7, 400); 
});
