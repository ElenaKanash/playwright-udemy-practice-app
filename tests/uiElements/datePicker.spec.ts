import { test, expect } from "@playwright/test";

test.describe("Date Picker", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:4200/");
    await page.getByText("Forms").click();
    await page.getByText("Datepicker").click();
  });

  test("Select a specific date in the calendar", async ({ page }) => {
    const datePickerInputField = page.getByPlaceholder("Form Picker");
    await datePickerInputField.click();

    await page.locator('[class="day-cell ng-star-inserted"]').getByText("1", { exact: true }).click();
    await expect(datePickerInputField).toHaveValue("Jul 1, 2024");
  });

  test("Select a date in the calendar using JS Date", async ({ page }) => {
    const calendarInputField = page.getByPlaceholder("Form Picker");
    await calendarInputField.click();

    let date = new Date();
    date.setDate(date.getDate() + 300); // date.getDate() return current data, setdate() - set this date to the current date object.
    const expectedDate = date.getDate().toString(); // return number of the day in string format
    const expectedMonthShot = date.toLocaleString("En-US", { month: "short" }); //using in the calendar data input
    const expectedMonthLong = date.toLocaleString("En-US", { month: "long" }); // using in the callendar form
    const expectedYear = date.getFullYear();
    const dateToAssert = `${expectedMonthShot} ${expectedDate}, ${expectedYear}`; //expected value in the callendar data input after selecting data

    // month and year switching in the date calendar according date
    let calendarMonthAndYear = await page.locator("nb-calendar-view-mode").textContent();//data in the callendar form
    const expectedMonthAndYear = ` ${expectedMonthLong} ${expectedYear}`;
    //click on the next month button until the desired month will be selected.
    while (!calendarMonthAndYear.includes(expectedMonthAndYear)) {
      await page.locator('nb-calendar-pageable-navigation [data-name="chevron-right"]').click();
      calendarMonthAndYear = await page.locator("nb-calendar-view-mode").textContent();
    }

    await page.locator('[class="day-cell ng-star-inserted"]').getByText(expectedDate, { exact: true }).click();
    await expect(calendarInputField).toHaveValue(dateToAssert);
  });
});
