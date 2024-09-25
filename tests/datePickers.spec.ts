import { test, expect } from "@playwright/test";
/* import { NavigationPage } from "../page_objects/navigationPage";
import { DatePickerPage } from "../page_objects/datePickerPage"; */
import { PageManager } from "../page_objects/pageManagerPage";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("Select Common DatePicker Date From Today", async ({ page }) => {
  const pm = new PageManager(page);
 /*  const navigateTo = new NavigationPage(page);
  const datePickerPage = new DatePickerPage(page); */

  await pm.navigateTo().datepickerPage();
  await pm.onDatepickerPage().selectCommonDatePickerDateFromToday(7);
  await pm.onDatepickerPage().selectDatepickerWithRangeFromToday(7, 400); 
});
