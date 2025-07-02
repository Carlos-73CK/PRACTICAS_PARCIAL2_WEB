# Práctica 2 - Aplicación de Gestión de Posts

## 📌 Descripción del Proyecto

Esta aplicación es un sistema de gestión de publicaciones que permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre posts. El backend está construido con **NestJS**, utiliza **TypeORM** para la interacción con la base de datos, y **PostgreSQL** como sistema gestor. La aplicación expone una API **GraphQL** para una comunicación eficiente entre el cliente y el servidor.

---

## 🧩 Entidades Implementadas

### 1. Post
Representa una publicación dentro del sistema.
- `id`: Identificador único (autogenerado).
- `titulo`: Título del post.
- `contenido`: Contenido del post.
- `fechaCreacion`: Fecha de creación.
- `tipoRecursoId`: Relación con un tipo de recurso.

### 2. Recurso
Asocia un archivo o elemento multimedia a un post.
- `id`: Identificador único (autogenerado).
- `nombre`: Nombre del recurso.
- `tipo`: Tipo del recurso.
- `post`: Relación con la entidad Post.

### 3. TipoRecurso
Define los tipos de recursos que se pueden asociar a una publicación.
- `id`: Identificador único (autogenerado).
- `nombre`: Nombre del tipo de recurso.

---

## ⚙️ Instrucciones de Instalación y Ejecución

### 1. Clonar el Repositorio
```bash
git clone https://github.com/Carlos-73CK/PRACTICAS_PARCIAL2_WEB.git
cd tu_carpeta 

2. Instalar Dependencias
Asegúrate de tener Node.js y npm instalados. Luego ejecuta:

npm install

3. Configurar la Base de Datos
Asegúrate de tener PostgreSQL instalado y en funcionamiento.

Crea una base de datos llamada practica2 (o el nombre que prefieras).

Actualiza las credenciales de conexión en app.module.ts si es necesario.

4. Ejecutar la Aplicación

npm run start

5. Acceder al Playground de GraphQL

Dirígete a:

http://localhost:3000/graphql

Desde allí podrás realizar consultas y mutaciones a la API.

Tecnologías Utilizadas

NestJS
TypeORM
PostgreSQL
GraphQL
Node.js

Estado del Proyecto
✅ CRUD completo para entidades Post, Recurso y TipoRecurso.
✅ API funcional con GraphQL Playground.
🔧 En constante evolución según los requerimientos del segundo parcial.

Autor
Carlos 73CK
GitHub - Carlos-73CK

Carlos Alberto Delgado Campuzano 
5 to "A"