import { Selector } from 'testcafe';

// Configura el fixture y la página inicial
fixture `Mi Aplicación`
  //  .page `http://localhost:4200`; // Cambia esta URL según sea necesario
    .page `https://clincicadental.netlify.app/#/`; // Cambia esta URL según sea necesario

// Prueba para verificar el inicio de sesión
test('Prueba de inicio de sesión', async t => {
    // Selecciona los elementos de entrada y el botón
    const emailInput = Selector('#campoEmail');
    const passwordInput = Selector('#contrasena');
    const loginButton = Selector('button').withText('Iniciar sesión'); // Asegúrate de que este texto coincida con el botón en tu HTML

    // Espera un momento para asegurarte de que la página se haya cargado completamente
    await t.wait(2000); // Espera 2 segundos

    // Ingresa un correo electrónico y contraseña válidos
    await t
        .typeText(emailInput, 'correo@example.com') // Reemplaza con un correo electrónico de prueba
        .typeText(passwordInput, 'contraseña123') // Reemplaza con una contraseña de prueba
        .click(loginButton) // Haz clic en el botón de inicio de sesión
        .wait(2000); // Espera 2 segundos para que la acción se complete

    // Verifica si la redirección o el mensaje de éxito es visible
    // Aquí puedes verificar un elemento que aparezca solo después de iniciar sesión
    const dashboardTitle = Selector('h1').withText('Bienvenido'); // Cambia esto por un selector adecuado
    await t.expect(dashboardTitle.visible).ok('El título de bienvenida no es visible');

    // Alternativamente, verifica que la URL cambie después del inicio de sesión
    await t.expect(t.eval(() => document.location.pathname)).eql('/user/inicio'); // Cambia esto a la ruta correcta
});