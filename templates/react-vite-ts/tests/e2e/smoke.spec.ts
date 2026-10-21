import { expect, test } from "@playwright/test";
test("application loads", async ({page}) => {
  await page.goto("/");
  await expect(page.getByRole("heading", {name: "__PROJECT_NAME__"})).toBeVisible();
});
