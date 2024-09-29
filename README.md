# Dentalfront
# README - Enfoque Web - Dental Crown

Proyecto  Dental Crown Bina 7
Ingeniería en Desarrollo y Gestión de Software
10° B
- CRUZ LUNA ARLETTE
- CARLOS EZEQUIEL MEYER MEDINA



## 1.  Descripción del Proyecto
Este proyecto consiste en una Aplicación Web desarrollada para la clínica dental Dental Crown ubicada en Huejutla de Reyes Hidalgo. El sitio web permite a los pacientes agendar citas, realizar pagos de manera segura en línea, y acceder a servicios especializados y toda la información referente a la clínica. 

 **Objetivo general del proyecto**
Desarrollar un sitio web que mejore la eficiencia operativa de la clínica dental "Dental Crown" al automatizar los procesos de gestión de citas, proporcionando una experiencia de usuario fluida para mejorar la satisfacción del cliente, y ofreciendo información que permitan tomar mejores decisiones comerciales para aumentar la rentabilidad del consultorio.

 - Funcionalidad principal: Permitir a los usuarios (pacientes) agendar citas y realizar pagos en línea utilizando tarjetas de crédito o débito.
 - Diseño responsivo: La aplicación es completamente adaptable a dispositivos móviles, tabletas y computadoras de escritorio.
**Alcance**
-   Agendar citas
-   Integración de pasarela de pagos para asegurar que los pacientes puedan pagar sus citas en línea utilizando tarjetas de crédito o débito.
-   Diseño responsivo que permita que la aplicación sea utilizada en diferentes dispositivos, como móviles, tabletas y computadoras de escritorio.
-   Integración del modelo de negocio Canvas como parte del proyecto de la materia Integradora, donde se identifican aspectos clave como socios, actividades, recursos, flujo de ingresos, etc.

**Riesgos y Medidas**

**Riesgo 1:** Problemas de seguridad en la pasarela de pagos.

-   **Medida:** Usar una API segura como Stripe con autenticación SSL.
    

**Riesgo 2:** Incompatibilidad con dispositivos móviles.

-   **Medida:** Implementar pruebas automatizadas en varios navegadores y dispositivos para asegurar compatibilidad.
    

**Riesgo 3:** Retrasos en el desarrollo.

-   **Medida:** Priorizar tareas clave y realizar reuniones diarias para asegurar que los plazos se cumplan.

**Estrategia de comunicación**
Se realizarán reuniones diarias de seguimiento para discutir el progreso de cada desarrollador, identificar bloqueos y coordinar tareas futuras.

## Metodología
El desarrollo del proyecto se ha realizado utilizando la metodología ágil eXtreme Programming (XP) para asegurar entregas rápidas y retroalimentación continua.

Este proyecto sigue la metodología ágil eXtreme Programming (XP), que incluye:

- Desarrollo en iteraciones cortas con entregas semanales.
- Programación en parejas para mejorar la calidad del código.
- Retroalimentación constante por parte de los usuarios y pruebas continuas.
- Uso de Trello para la gestión del proyecto y seguimiento de tareas.

## Estructura del Proyecto (Elementos faltantes)
El proyecto está dividido en las siguientes funcionalidades clave:

- Agenda de Citas: Los pacientes pueden agendar citas.
- Pasarela de Pagos: Integración con Stripe o PayPal para realizar pagos seguros.
- Diseño Responsivo: Adaptación del diseño para varios dispositivos.
## 2. Herramienta de Planeación
Toda la información relacionada con los objetivos, alcance, riesgos, metodología y roles del equipo también se encuentra en el apartado "Aspectos clave" en la herramienta de Trello.

En Trello se organizará el proyecto en tableros divididos en:

-   **Backlog**: Listado de tareas pendientes que aún no se han comenzado.
-   **In Progress**: Tareas que están siendo trabajadas actualmente.
-   **Review**: Tareas que están en proceso de ser revisadas por los desarrolladores o el tester.
-   **Done**: Tareas completadas que han pasado por la revisión y están listas.

Cada tarjeta en Trello incluirá:

-   Descripción detallada de la tarea o issue.
-   Responsable de la tarea.
-   Prioridad (alta, media, baja).
-   Fecha límite de entrega.

## 3. Herramienta de Control de Versiones
El control de versiones se realiza a través de  **Git**  y se gestiona en  **GitHub**.

### Flujo de Trabajo:

1.  Cada desarrollador trabaja en una rama específica basada en la tarea que tiene asignada.
2.  Se utilizan pull requests para solicitar la integración de cambios a la rama principal.
3.  El código pasa por una revisión de pares antes de ser fusionado.
4.  Se realizan commits regulares con mensajes claros y descriptivos.
## 4. Estrategia de Versionamiento y Gestión de Ramas
La estrategia de versionamiento sigue el esquema  **SemVer**  (Versionado Semántico):

-   **MAJOR**: Para cambios que rompen la compatibilidad.
-   **MINOR**: Para nuevas funcionalidades que no rompen compatibilidad.
-   **PATCH**: Para correcciones de errores y mejoras menores.

### Gestión de Ramas:
-   **Main**: Rama principal estable.
-   **servicios-Apis**: Rama para trabajar con las APIs requeridas.
-   **Navegación-App**: Rama para la navegación, gestión y control de rutas de navegación.
-   **Pago-Stripe**: Rama para montar el método de pago de Stripe.
## 5. Estrategia de despliegue y CI/CD
La estrategia de despliegue para la **aplicación web** utiliza **Netlify** para gestionar el proceso de pruebas y despliegue continuo. Esta herramienta permite realizar despliegues rápidos, asegurando que las actualizaciones de la aplicación web estén disponibles en el entorno de producción de manera ágil y eficiente.

#### **Entornos**:

1.  **Desarrollo**:
    
    -   Este entorno se utiliza para realizar pruebas locales y de desarrollo. Los desarrolladores pueden verificar sus cambios en sus máquinas locales antes de fusionarlos en la rama `master` o `main`.
    -   También se puede configurar un entorno de **staging** en Netlify para probar los cambios antes de hacer el despliegue a producción.
2.  **Producción**:
    
    -   Es el entorno donde la aplicación web es visible para los usuarios finales.
    -   Los cambios que pasan las pruebas locales y en staging se despliegan automáticamente en este entorno.

#### **Proceso CI/CD**:

1.  **CI (Integración Continua)**:
    
    -   Cada vez que se realiza un **pull request** o se hace un `push` a la rama `master`, **Netlify** ejecuta un conjunto de **pruebas automáticas**.
    -   Si los tests pasan, el código se considera listo para ser desplegado.
    -   Las pruebas incluyen la validación de que el código no rompe las funcionalidades existentes y se ejecutan antes de que los cambios sean aceptados.
2.  **CD (Despliegue Continuo)**:
    
    -   Una vez que los cambios son aprobados y las pruebas automáticas han pasado, **Netlify** despliega automáticamente la aplicación web en el entorno de **producción**.
    -   Este despliegue automático asegura que la aplicación esté siempre actualizada con los últimos cambios.
    -   **Netlify** realiza un nuevo build del sitio web y lo publica en tiempo real, sin interrupciones para los usuarios finales.

### **Flujo de trabajo**:

1.  **Desarrollo**:
    
    -   Se realizan sus cambios localmente y crean una **nueva rama** para la funcionalidad que están trabajando.
    -   Se realizan pruebas locales para asegurar que el nuevo código funcione correctamente.
2.  **Pull Request**:
    
    -   Una vez que el código está listo, se abre un **pull request** hacia la rama `master` o `main`.
    -   El sistema de CI de **Netlify** se activa y ejecuta las **pruebas automáticas** para verificar que el código nuevo no introduzca errores.
3.  **Aprobación y fusión**:
    
    -   Si las pruebas pasan, el pull request es revisado por otro miembro del equipo.
    -   Después de la aprobación, los cambios se fusionan en la rama `master` o `main`.
4.  **Despliegue automático**:
    
    -   Una vez que el código está en la rama `master`, **Netlify** realiza un **despliegue automático** en el entorno de producción.
    -   La aplicación web se actualiza en tiempo real para todos los usuarios.
### **Herramientas Usadas**:

-   **Netlify**: Para el CI/CD y el despliegue continuo de la aplicación web.
-   **GitHub**: Para la gestión de código y control de versiones.
- **Railway**: Para la gestión de la Base de datos.
## Requisitos
- Framework: Angular
- Express.js (Node.js)
- Base de Datos: MySQL
- Pasarela de Pagos: Stripe
- Control de Versiones: Git (GitHub)
- Entornos de Despliegue: Desarrollo, Staging, Producción, Netlify y Railway

## 6. Instalación

 **1. Clonar el Repositorio** 
 Primero, clona el repositorio en tu máquina local. Asegúrate de tener Git instalado. 
 ```bash
 git clone https://github.com/CarlosMeyer400400/proyectoclinicafront-front.git 
 cd proyectoclinicafront-front
```

**2. Instalar Dependencias:**
El proyecto utiliza **Node.js** y **npm** para la gestión de dependencias. ADebemos asegurarnos de tener **Node.js** instalado antes de continuar.

Instala todas las dependencias del proyecto utilizando `npm`
 ```bash
 npm install
 ```
**3. Ejecución del proyecto:**
Una vez configuradas las dependencias, ejecutar el servidor local con el siguiente comando:
 ```bash
 npm run start
 ```
Este comando iniciará el servidor local en el puerto definido en el archivo `.env` (por defecto `4200`). Puedes acceder a la aplicación desde el navegador en:
 ```bash
  http://localhost:4200/
 ```
