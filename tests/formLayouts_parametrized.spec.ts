import { test, expect } from "@playwright/test";
import { PageManager } from "../page_objects/pageManagerPage";
import { faker } from "@faker-js/faker";
/* import { NavigationPage } from "../page_objects/navigationPage";
import { FormLayoutsPage } from './../page_objects/formLayoutsPage'; */

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:4200/");
});

test("Submit Form Layouts with parametrized methods", async ({ page }) => {
/*   const navigateTo = new NavigationPage(page);
  const formLayoutsPage = new FormLayoutsPage(page); */
  const pm = new PageManager(page);
  const randomFullName = faker.person.fullName();
  const randomEmail = `${randomFullName.replaceAll(' ', '')}${faker.number.int(100)}@test.com`;
  const randomPasword = faker.string.alphanumeric({ length: { min: 8, max: 15 } });

  await pm.navigateTo().formLayoutsPage();
  await pm.onFormLayoutsPage().submitInlineFormWithParametrs('Ivan Ivanov', 'ivanov@test.com', false);
  await pm.onFormLayoutsPage().submitInlineFormWithParametrs(randomFullName, randomEmail, true);  
  await pm.onFormLayoutsPage().submitUsingTheGridFormWithParameters('test@test.com', '12345678', 'Option 1');
  await pm.onFormLayoutsPage().submitUsingTheGridFormWithParameters(randomEmail, randomPasword, 'Option 2');
  
})