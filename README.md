## Breve descripción del proyecto

Este proyecto es una API REST desarrollada con **NestJS**, que utiliza **TypeORM** para la gestión de una base de datos **SQLite**. Forma parte de la práctica de desarrollo de una plataforma de adopción de mascotas.

La API está estructurada por módulos y sigue una arquitectura por capas (entidades, DTOs, servicios, controladores y módulos). Las entidades gestionadas son:

- **Posts**: Permite registrar y gestionar publicaciones sobre mascotas disponibles para adopción.
- **Recursos**: Administra los recursos multimedia (imágenes, videos) asociados a cada post.
- **Tipos de Recurso**: Clasifica los diferentes tipos de recursos multimedia.

Cada módulo implementa sus respectivos endpoints CRUD (POST, GET, GET:id, PATCH, DELETE).

## Instrucciones para instalar y ejecutar el proyecto

1. Instalar el CLI de NestJS (si no lo tienes instalado):
  npm install -g @nestjs/cli
2. Instalar las dependencias:
 npm install
3. Ejecutar la API:
 npm run start:dev

Puedes usar Postman o cURL para interactuar con la API. Si tienes el archivo Postman_Collection.json, impórtalo para tener acceso inmediato a todos los endpoints listos para probar.
en la capeta practica1\imagenes se encuentra el uso de Postman y la documentacion.
Muchas gracias por su atención , se le aprecia :D