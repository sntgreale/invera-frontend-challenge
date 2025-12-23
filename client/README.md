## 🚀 Invera Frontend Challenge - Client

Este proyecto es la solución al desafío técnico de Invera. Consiste en un panel de control (Dashboard) para la gestión de usuarios que consume una API mock y sigue fielmente el diseño proporcionado.

## 📋 Requisitos Previos

Antes de iniciar, asegúrate de tener instalado:
Node.js (Versión LTS recomendada)
npm o yarn

## 🛠️ Configuración y Ejecución

Para que la aplicación funcione correctamente, se deben ejecutar tanto el servidor de datos como la interfaz de usuario.

1. Clonar el repositorio

```
git clone git@github.com:sntgreale/invera-frontend-challenge.git
```

2. Ejecutar el Servidor (Backend Mock)

-El servidor debe estar activo para que el cliente pueda consumir los datos.
-- Navega a la carpeta del servidor: cd server.

-Instala las dependencias: npm install.
-Inicia el servidor: npm run dev.
-- Nota: El servidor corre por defecto mediante json-server.

3. Ejecutar el Cliente (Frontend)

Abre una nueva terminal y sigue estos pasos:
Navega a la carpeta del cliente: cd client.

Instala las dependencias: npm install.
Inicia la aplicación: npm run dev (o el comando correspondiente según la herramienta usada)..

## 🎨 Características Implementadas

Obligatorias

- Estadísticas generales: Resumen de Total, New, Top y Other Users.

- Gráfico Circular: Visualización de distribución (Organic, Social, Direct).

- Tabla de Usuarios: Listado completo con datos consumidos desde la API.

- Paginación: Implementada directamente con los parámetros de la API (\_page y \_limit).

- Fidelidad de Diseño: Interfaz desarrollada siguiendo los lineamientos de Figma.

- Responsive Design para móviles y tablets.

- Filtros avanzados por estado y compañía.

- Búsqueda global de usuarios.

- Operaciones CRUD (Crear, Editar, Eliminar).

## 🧰 Stack Tecnológico Utilizado

- Framework: React.js.

- Lenguaje: Javascript / TypeScript.

- Estilos: Tailwind CSS / Styled-components.

- Componentes: ShadCN.

## 📡 Endpoints Principales Utilizados

La aplicación se conecta a los siguientes servicios del servidor:

GET /users: Listado paginado de usuarios.

GET /statics: Datos de las tarjetas de encabezado.

GET /userTypes: Datos para el gráfico de distribución.
