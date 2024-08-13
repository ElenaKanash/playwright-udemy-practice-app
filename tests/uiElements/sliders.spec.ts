import { test, expect } from "@playwright/test";

test.describe("Sliders", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:4200/");
  });

  test("Update slider attribute", async ({ page }) => {
    const tempBox = page.locator('[tabtitle="Temperature"] ngx-temperature-dragger');
    const tempGauge = page.locator('[tabtitle="Temperature"] ngx-temperature-dragger circle');
    //update attributes of the tempGauge to max value
    await tempGauge.evaluate((node) => {
      node.setAttribute("cx", "232.630");
      node.setAttribute("cy", "232.630");
    });
    //trigger the event and reflect UI change
    await tempGauge.click();

    await expect(tempBox).toContainText("30");
  });

  test("Simulate the mouse movement", async ({ page }) => {
    const tempBox = page.locator('[tabtitle="Temperature"] ngx-temperature-dragger');
    await tempBox.scrollIntoViewIfNeeded();
    //define a bounding box with X=0 and Y=0 coordinates around
    const box = await tempBox.boundingBox();
    //define starting point = center of the box
    const x = box.x + box.width / 2;
    const y = box.y + box.height / 2;
    //update to max value
    await page.mouse.move(x, y);
    //simulate click of the mouse left button
    await page.mouse.down();
    //horizontal move
    await page.mouse.move(x + 100, y);
    //vertical move
    await page.mouse.move(x + 100, y + 100);
    await page.mouse.up();

    await expect(tempBox).toContainText("30");

    //update to min value
    await page.mouse.move(x, y);
    await page.mouse.down();    
    await page.mouse.move(x - 100, y);    
    await page.mouse.move(x - 100, y + 100);
    await page.mouse.up();

    await expect(tempBox).toContainText("13");
  });
});
