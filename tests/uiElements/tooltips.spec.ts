import { test, expect } from "@playwright/test";

test("Tooltip", async ({ page }) => {
  await page.goto("http://localhost:4200/");
  await page.getByText("Modal & Overlays").click();
  await page.getByText("Tooltip").click();

  const tooltipCard = page.locator('nb-card', {hasText: 'Tooltip Placements'});
  await tooltipCard.getByRole('button', {name: 'Top'}).hover();
  
 // page.getByRole('tooltip') works only if el has role tooltip
const tooltip = await page.locator('nb-tooltip').textContent();
expect(tooltip).toEqual('This is a tooltip');
})