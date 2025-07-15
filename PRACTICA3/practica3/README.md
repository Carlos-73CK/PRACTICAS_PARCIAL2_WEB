# Proyecto NestJS con WebSockets y CRUD (Post, Recurso, TipoRecurso)

Este proyecto implementa una API de tiempo real (Realtime API) utilizando **NestJS** y **WebSockets (Socket.IO)** para la gestión de operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en tres entidades: `Post`, `Recurso` y `TipoRecurso`. La persistencia de datos se realiza con **TypeORM** y **SQLite**.

## Contenido del Proyecto

* **`src/`**: Contiene la lógica principal de la aplicación NestJS, incluyendo:
    * **Gateways**: `post.gateway.ts`, `recurso.gateway.ts`, `tipo-recurso.gateway.ts` para manejar la comunicación WebSocket.
    * **Services**: Lógica de negocio para las operaciones CRUD.
    * **Entities**: Definición de las estructuras de datos (Post, Recurso, TipoRecurso).
    * **DTOs**: Objetos de transferencia de datos para la validación de entrada.
* **`database.sqlite`**: Archivo de base de datos SQLite (se genera automáticamente).
* **`websocket_test.html`**: Un cliente HTML/JavaScript simple para probar las conexiones WebSocket y las operaciones CRUD directamente desde el navegador.

## Requisitos

Antes de iniciar el proyecto, asegúrate de tener instalado lo siguiente:

* **Node.js**: Versión 18 o superior (se ha probado con v22.17.1 LTS).
* **npm** (Node Package Manager): Viene incluido con Node.js.

## Configuración e Instalación

1.  **Clonar el repositorio** (o navegar a la carpeta de tu proyecto):
    ```bash
    cd /ruta/a/tu/proyecto
    ```

2.  **Instalar las dependencias:**
    Este proyecto utiliza `@nestjs/platform-socket.io` en versión 11, mientras que otras dependencias de NestJS estaban en la versión 10, lo que causaba incompatibilidad. Se han unificado todas las dependencias principales de NestJS a la versión `^11.0.0` en `package.json` para resolver este problema.

    Primero, asegúrate de que tu `package.json` contenga las versiones actualizadas (como se muestra en el JSON completo proporcionado en los chats).

    Luego, elimina las dependencias existentes y reinstala:

    * **En PowerShell:**
        ```powershell
        Remove-Item -Recurse -Force node_modules
        Remove-Item -Force package-lock.json
        npm install --legacy-peer-deps
        ```
    * **En CMD (Símbolo del sistema):**
        ```cmd
        rmdir /s /q node_modules
        del package-lock.json
        npm install --legacy-peer-deps
        ```
    Este comando instalará todas las dependencias necesarias para el proyecto.

## Ejecutar el Proyecto

1.  **Iniciar el servidor NestJS:**
    ```bash
    npm run start:dev
    ```
    Esto iniciará el servidor en modo de desarrollo y lo mantendrá observando los cambios. Deberías ver un mensaje en la terminal indicando que la aplicación se inició correctamente:
    ```
    [Nest] ... LOG [NestApplication] Nest application successfully started ...
    ```
    También verás que los Gateways están suscritos a sus respectivos mensajes.

2.  **Verificar Firewall de Windows (importante para la conectividad local):**
    Durante el desarrollo, se identificó que el Firewall de Windows Defender podía bloquear las conexiones a Node.js. Para asegurar la conectividad:
    * Ve a "Firewall y protección de red" en Windows.
    * Haz clic en "Permitir una aplicación a través del Firewall de Windows".
    * Haz clic en "Cambiar la configuración".
    * Busca "Node.js JavaScript Runtime" y **asegúrate de que las casillas "Privada" y "Pública" estén marcadas**. Esto permite que tu aplicación NestJS acepte conexiones.

## Pruebas de Funcionamiento

### ¿Por qué no se usó Postman para las pruebas?

Inicialmente, se intentó usar Postman para probar las conexiones WebSocket. Sin embargo, a pesar de que el servidor NestJS se iniciaba correctamente y la configuración de WebSockets (incluyendo CORS) era correcta, Postman no lograba establecer la conexión, mostrando errores como "Could not connect" y "Error: socket hang up".

Se diagnosticó que el problema no residía en el código del servidor NestJS, sino en una interacción específica o configuración del entorno de Postman que impedía el handshake de WebSocket.

### Herramienta de Prueba: `websocket_test.html`

Para garantizar la funcionalidad del backend, se creó un cliente WebSocket simple en HTML y JavaScript (`websocket_test.html`). Este cliente utiliza la librería `socket.io-client` y ha demostrado que el servidor NestJS está completamente funcional y acepta conexiones WebSocket, permitiendo todas las operaciones CRUD.

**Cómo usar `websocket_test.html`:**

1.  Asegúrate de que el servidor NestJS esté corriendo (`npm run start:dev`).
2.  Abre el archivo `websocket_test.html` en tu navegador web.
3.  Haz clic en el botón **"Connect"**.
4.  El "Status" en la página debe cambiar a "Connected", y en la consola de tu navegador y en la terminal de tu servidor NestJS, verás mensajes de conexión.

### Realizar Operaciones CRUD con `websocket_test.html`

Utiliza los campos "Event Name" y "JSON Payload" del cliente HTML para enviar mensajes a tu servidor NestJS. Asegúrate de que el formato JSON sea correcto para cada operación.

#### Entidad `Post`

| Operación | Event Name  | JSON Payload (Ejemplo)                                           | Respuesta Esperada (Evento) |
| :-------- | :---------- | :--------------------------------------------------------------- | :-------------------------- |
| **Crear** | `createPost` | `{"titulo": "Mi primer post", "contenido": "Contenido.", "publicado": true}` | `postCreated`               |
| **Leer Todos** | `findAllPosts` | `{}`                                                               | `postsFound`                |
| **Leer Uno** | `findOnePost` | `1` (usar el ID real del post)                                   | `postFound`                 |
| **Actualizar** | `updatePost` | `{"id": 1, "titulo": "Post Editado", "publicado": false}`        | `postUpdated`               |
| **Eliminar** | `removePost` | `1` (usar el ID real del post)                                   | `postRemoved`               |

#### Entidad `Recurso`

| Operación | Event Name  | JSON Payload (Ejemplo)                                           | Respuesta Esperada (Evento) |
| :-------- | :---------- | :--------------------------------------------------------------- | :-------------------------- |
| **Crear** | `createRecurso` | `{"nombre": "Libro NestJS", "tipo": "Digital", "disponible": true}` | `recursoCreated`               |
| **Leer Todos** | `findAllRecursos` | `{}`                                                               | `recursosFound`                |
| **Leer Uno** | `findOneRecurso` | `1` (usar el ID real del recurso)                                   | `recursoFound`                 |
| **Actualizar** | `updateRecurso` | `{"id": 1, "nombre": "Libro NestJS v2", "disponible": false}`        | `recursoUpdated`               |
| **Eliminar** | `removeRecurso` | `1` (usar el ID real del recurso)                                   | `recursoRemoved`               |

#### Entidad `TipoRecurso`

| Operación | Event Name  | JSON Payload (Ejemplo)                                           | Respuesta Esperada (Evento) |
| :-------- | :---------- | :--------------------------------------------------------------- | :-------------------------- |
| **Crear** | `createTipoRecurso` | `{"nombre": "Software", "descripcion": "Programas."}` | `tipoRecursoCreated`               |
| **Leer Todos** | `findAllTipoRecursos` | `{}`                                                               | `tipoRecursosFound`                |
| **Leer Uno** | `findOneTipoRecurso` | `1` (usar el ID real del tipo de recurso)                                   | `tipoRecursoFound`                 |
| **Actualizar** | `updateTipoRecurso` | `{"id": 1, "nombre": "Aplicación", "descripcion": "Apps."}`        | `tipoRecursoUpdated`               |
| **Eliminar** | `removeTipoRecurso` | `1` (usar el ID real del tipo de recurso)                                   | `tipoRecursoRemoved`               |

**Después de cada "Send Message", verifica el "Message Log" en la página HTML para confirmar que el evento de respuesta (`postCreated`, `postsFound`, etc.) es recibido con los datos esperados.**

## Imágenes de las Pruebas

Se ha incluido una carpeta `iamgenes/`websocket_test.html`, demostrando el funcionamiento exitoso de cada método CRUD.

---