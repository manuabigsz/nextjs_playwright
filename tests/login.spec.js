const { test, expect } = require('@playwright/test');

// test('deve exibir erro se o email for inválido', async ({ page }) => {
//   await page.goto('http://localhost:3000/login');

//   await page.getByTestId('email').fill('emailsemarroba.com');
//   await page.getByTestId('senha').fill('123456');
//   await page.getByRole('button', { name: 'Entrar' }).click();

//   await expect(page.getByTestId('erro')).toHaveText('Email inválido');
// });

// test('não deve submeter o formulário se a senha for muito curta - espera falha', async ({ page }) => {
//   let alertShown = false;
//   page.on('dialog', async dialog => {
//     alertShown = true;
//     await dialog.dismiss();
//   });
  
//   await page.goto('http://localhost:3000/login');
//   await page.getByTestId('email').fill('teste@exemplo.com');
//   await page.getByTestId('senha').fill('123');
//   await page.locator('button[type="submit"]').click();
  
//   await expect(page.getByTestId('erro')).not.toBeVisible();
  
//   expect(alertShown).toBe(true);
// });


test('deve enviar o formulário com dados válidos', async ({ page }) => {
  await page.goto('http://localhost:3000/login');

  await page.getByTestId('email').fill('teste@exemplo.com');
  await page.getByTestId('senha').fill('123456');
  await page.getByRole('button', { name: 'Entrar' }).click();

  // Confirma se o alerta foi chamado com a mensagem correta
  page.on('dialog', async (dialog) => {
    expect(dialog.message()).toBe('Login enviado com sucesso!');
    await dialog.dismiss();
  });
});
