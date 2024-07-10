import { test, expect } from "@playwright/test";

test.describe('Form Layouts page', ()=>{
  test.beforeEach(async({page})=>{
    await page.goto('http://localhost:4200/');
    await page.getByText('Forms').click();
    await page.getByText('Form Layouts').click();
    })

  test('Input Fields', async({page}) =>{


  })
})

