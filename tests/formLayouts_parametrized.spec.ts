import { test, expect } from "@playwright/test";
import { PageManager } from "../page_objects/pageManagerPage";
/* import { NavigationPage } from "../page_objects/navigationPage";
import { FormLayoutsPage } from './../page_objects/formLayoutsPage'; */

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:4200/");
});

test("Submit Form Layouts with parametrized methods", async ({ page }) => {
/*   const navigateTo = new NavigationPage(page);
  const formLayoutsPage = new FormLayoutsPage(page); */
  const pm = new PageManager(page);

  await pm.navigateTo().formLayoutsPage();
  await pm.onFormLayoutsPage().submitInlineFormWithParametrs('Jo Jo', 'jo@test.com', false);
  await pm.onFormLayoutsPage().submitInlineFormWithParametrs('Ivan Ivanov', 'ivanov@test.com', true);  
  await pm.onFormLayoutsPage().submitUsingTheGridFormWithParameters('test@test.com', '12345', 'Option 1');
  await pm.onFormLayoutsPage().submitUsingTheGridFormWithParameters('user@test.com', '@@@', 'Option 2');
  
})