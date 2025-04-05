const { test, expect } = require('@playwright/test');

test('deve incrementar o contador ao clicar no botão', async ({ page }) => {
  await page.goto('http://localhost:3000');

  const counter = page.getByTestId('counter');
  await expect(counter).toHaveText('0');

  await page.getByRole('button', { name: 'Incrementar' }).click();
  await expect(counter).toHaveText('1');
});
