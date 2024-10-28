import { Selector } from 'testcafe';

// Configura el fixture y la página inicial
fixture `Mi Aplicación`
  .page `https://clincicadental.netlify.app/#/`; // Cambia esta URL según sea necesario

// Prueba para verificar el inicio de sesión
test('Prueba de inicio de sesión exitoso', async t => {
    const emailInput = Selector('#campoEmail');
    const passwordInput = Selector('#contrasena');
    const loginButton = Selector('button').withText('Iniciar sesión');
    const dashboardTitle = Selector('h1').withText('Bienvenido');

    await t
        .wait(2000) // Espera 2 segundos
        .typeText(emailInput, 'correo@example.com') // Reemplaza con un correo electrónico de prueba
        .typeText(passwordInput, 'contraseña123') // Reemplaza con una contraseña de prueba
        .click(loginButton)
        .wait(2000); // Espera 2 segundos para que la acción se complete

});





