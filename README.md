# Dentalfront

PWA Clínica Dental - Dental Crown
CRUZ LUNA ARLETTE
CARLOS EZEQUIEL MEYER MEDINA

## Descripción del Proyecto
Este proyecto consiste en una Aplicación Web Progresiva (PWA) desarrollada para la clínica dental Dental Crown. La PWA permite a los pacientes agendar citas, realizar pagos de manera segura en línea, y acceder a servicios especializados. El desarrollo del proyecto se ha realizado utilizando la metodología ágil eXtreme Programming (XP) para asegurar entregas rápidas y retroalimentación continua.

## Objetivos del Proyecto
Funcionalidad principal: Permitir a los usuarios (pacientes) agendar citas y realizar pagos en línea utilizando tarjetas de crédito o débito.
Diseño responsivo: La aplicación es completamente adaptable a dispositivos móviles, tabletas y computadoras de escritorio.

## Metodología de Trabajo
Este proyecto sigue la metodología ágil eXtreme Programming (XP), que incluye:

- Desarrollo en iteraciones cortas con entregas semanales.
- Programación en parejas para mejorar la calidad del código.
- Retroalimentación constante por parte de los usuarios y pruebas continuas.
- Uso de Trello para la gestión del proyecto y seguimiento de tareas.

## Estructura del Proyecto (Elementos faltantes)
El proyecto está dividido en las siguientes funcionalidades clave:

- Agenda de Citas: Los pacientes pueden agendar y cancelar citas.
- Pasarela de Pagos: Integración con Stripe o PayPal para realizar pagos seguros.
- Gestión de Dentistas: Los administradores pueden agregar, editar y eliminar dentistas.
- Diseño Responsivo: Adaptación del diseño para varios dispositivos.

## Requisitos
- Framework: Angular
- Express.js (Node.js)
- Base de Datos: MySQL
- Pasarela de Pagos: Stripe
- Control de Versiones: Git (GitHub)
- Entornos de Despliegue: Desarrollo, Staging, Producción, Netlify y Railway

## Instalación
1. Clonar el Repositorio
Clona el repositorio desde GitHub:

git clone https://github.com/CarlosMeyer400400/proyectoclinicafront-front.git
cd proyectoclinicafront-front

2. Instalación de Dependencias
Asegúrate de tener Node.js instalado, luego instala las dependencias necesarias con:

npm install

3. Configuración de la Base de Datos (MySQL)
El proyecto utiliza MySQL. Sigue estos pasos para configurar la base de datos:

Crea una base de datos llamada dental_crown:
CREATE DATABASE dental_crown;

Importa el esquema de la base de datos desde el archivo SQL (database/dental_crown_schema.sql):
bash
mysql -u [usuario] -p dental_crown < database/dental_crown_schema.sql

Configura la conexión a la base de datos en un archivo .env:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=dental_crown

4. Variables de Entorno
Crea el archivo .env en la raíz del proyecto con el siguiente contenido:

PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=dental_crown
PAYMENT_PROVIDER=stripe
STRIPE_SECRET_KEY=your_stripe_secret_key


5. Ejecutar el Proyecto
Una vez configuradas las dependencias y la base de datos, ejecuta el siguiente comando para iniciar la aplicación:

npm start
La aplicación estará disponible en http://localhost:3000


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.0.
