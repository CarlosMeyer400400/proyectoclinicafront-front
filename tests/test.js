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

    // Verifica que el título de bienvenida sea visible
    await t.expect(dashboardTitle.visible).ok('El título de bienvenida no es visible');
});

// Prueba para verificar el inicio de sesión con correo no registrado
test('Prueba de inicio de sesión con email no registrado', async t => {
    const emailInput = Selector('#campoEmail');
    const passwordInput = Selector('#contrasena');
    const loginButton = Selector('button').withText('Iniciar sesión');

    await t
        .wait(2000)
        .typeText(emailInput, 'noexisto@example.com') // Correo no registrado
        .typeText(passwordInput, 'contraseña123')
        .click(loginButton)
        .wait(2000);

    // Verifica que aparezca el mensaje de error para email no registrado
    await t.expect(Selector('body').innerText).contains('Email no registrado', 'El mensaje de email no registrado no es visible');
});

// Prueba para verificar el inicio de sesión con contraseña incorrecta
test('Prueba de inicio de sesión con contraseña incorrecta', async t => {
    const emailInput = Selector('#campoEmail');
    const passwordInput = Selector('#contrasena');
    const loginButton = Selector('button').withText('Iniciar sesión');

    await t
        .wait(2000)
        .typeText(emailInput, 'correo@example.com') // Reemplaza con un correo electrónico de prueba
        .typeText(passwordInput, 'contraseñaIncorrecta') // Contraseña incorrecta
        .click(loginButton)
        .wait(2000);

    // Verifica que aparezca el mensaje de error para contraseña incorrecta
    await t.expect(Selector('body').innerText).contains('Contraseña incorrecta', 'El mensaje de contraseña incorrecta no es visible');
});

// Prueba para verificar el formulario de inicio de sesión sin completar
test('Prueba de inicio de sesión sin completar', async t => {
    const loginButton = Selector('button').withText('Iniciar sesión');

    await t
        .wait(2000)
        .click(loginButton)
        .wait(2000);

    // Verifica que aparezca el mensaje de error para campos obligatorios
    await t.expect(Selector('.error-message').visible).ok('No se mostraron mensajes de error para campos obligatorios');
});

// Prueba para verificar el captcha
test('Prueba de CAPTCHA no completado', async t => {
    const emailInput = Selector('#campoEmail');
    const passwordInput = Selector('#contrasena');
    const loginButton = Selector('button').withText('Iniciar sesión');

    await t
        .wait(2000)
        .typeText(emailInput, 'correo@example.com') // Reemplaza con un correo electrónico de prueba
        .typeText(passwordInput, 'contraseña123')
        .click(loginButton)
        .wait(2000);

    // Verifica que el botón de inicio de sesión esté deshabilitado debido al captcha no completado
    await t.expect(loginButton.hasAttribute('disabled')).ok('El botón de inicio de sesión no está deshabilitado cuando el CAPTCHA no se completa');
});
