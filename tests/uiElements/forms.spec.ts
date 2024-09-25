import { test, expect } from "@playwright/test";

test.describe("Form Layouts page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.getByText("Forms").click();
    await page.getByText("Form Layouts").click();
  });

  test("Input Fields", async ({ page }) => {
    const emailInputField = page
      .locator("nb-card", { hasText: "Using the Grid" })
      .getByRole("textbox", { name: "Email" });

    await emailInputField.fill("test@test.com");
    await emailInputField.clear();
    await emailInputField.pressSequentially("test2@test.com", { delay: 300 });

    //generic assertion
    const inputValue = await emailInputField.inputValue();
    expect(inputValue).toEqual("test2@test.com");

    //locator assertion
    await expect(emailInputField).toHaveValue("test2@test.com");
  });

  
});
