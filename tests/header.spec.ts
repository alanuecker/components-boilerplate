import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('localhost:3000');
});

test('dropdown on wide screen', async ({ page }) => {
  const header = page.getByRole('navigation');

  await header.getByRole('button', { name: 'DropdownExample' }).hover();

  await expect(
    header.getByRole('link', { name: 'Visit our Support Desk' }),
  ).toBeVisible();
});

test('dropdown on small screen', async ({ page }) => {
  await page.setViewportSize({
    width: 640,
    height: 480,
  });

  const header = page.getByRole('navigation');

  await header.getByRole('button', { name: '' }).click();
  await header.getByLabel('An example dropdown menu').click();

  await expect(
    header.getByRole('link', { name: 'Get Started' }).first(),
  ).toBeVisible();
});
