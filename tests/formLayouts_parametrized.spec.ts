import { test, expect } from "@playwright/test";
import { NavigationPage } from "../page_objects/navigationPage";
import { FormLayoutsPage } from './../page_objects/formLayoutsPage';

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:4200/");
});

test("Submit Form Layouts with parametrized methods", async ({ page }) => {
  const navigateTo = new NavigationPage(page);
  const formLayoutsPage = new FormLayoutsPage(page);

  await navigateTo.formLayoutsPage();
  await formLayoutsPage.submitInlineFormWithParametrs('Jo Jo', 'jo@test.com', false);
  await formLayoutsPage.submitInlineFormWithParametrs('Ivan Ivanov', 'ivanov@test.com', true);  
  await formLayoutsPage.submitUsingTheGridFormWithParameters('test@test.com', '12345', 'Option 1');
  await formLayoutsPage.submitUsingTheGridFormWithParameters('user@test.com', '@@@', 'Option 2');
  
})