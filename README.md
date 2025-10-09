# Dev Tree Frontend

Frontend project in React with TypeScript and Vite for user management, registration, and authentication interface.

**🚀 This project is deployed on [Netlify](https://www.netlify.com/)**

## Project Structure

* **src/main.tsx**: Entry point that renders the React application.
* **src/router.tsx**: React Router configuration with all application routes.
* **src/views/**: Page components (HomeView, Login, Register, Profile, etc.).
* **src/components/**: Reusable UI components.
* **src/layouts/**: Layout components for different sections of the app.
* **src/api/**: API functions for communicating with the backend.
* **src/types/**: TypeScript type definitions.
* **src/utils/**: Utility functions.
* **src/config/**: Configuration files (axios setup).

## Main Routes

* **/**: Home page with search functionality.
* **/auth/login**: User login page.
* **/auth/register**: User registration page.
* **/admin**: Protected admin area for managing links and profile.
* **/:handle**: Public user profile display.

## Installation

```bash
npm install
```

## Scripts

* **npm run dev**: Starts the development server with Vite.
* **npm run build**: Builds the project for production.
* **npm run lint**: Runs ESLint to check code quality.
* **npm run preview**: Previews the production build locally.

## Libraries Used

### Main Dependencies

* **react**: Core React library for building user interfaces.
* **react-dom**: React DOM rendering library.
* **react-router-dom**: Client-side routing for single-page applications.
* **react-hook-form**: Forms library with validation support.
* **@tanstack/react-query**: Data fetching and state management.
* **axios**: HTTP client for API requests.
* **tailwindcss**: Utility-first CSS framework for styling.
* **@headlessui/react**: Unstyled, accessible UI components.
* **@heroicons/react**: SVG icon library.
* **@dnd-kit/core**: Drag and drop functionality.
* **sonner**: Toast notification library.
* **react-slugify**: URL-friendly string generation.

### Development Dependencies

* **typescript**: Static type checking for JavaScript.
* **vite**: Fast build tool and development server.
* **@vitejs/plugin-react-swc**: Vite plugin for React with SWC.
* **eslint**: Code linting tool.
* **@tailwindcss/forms**: Tailwind CSS plugin for form styling.

## React + TypeScript + Vite Setup

This project uses Vite as the build tool with React and TypeScript for a modern development experience.

---

# Dev Tree Frontend (Español)

Proyecto frontend en React con TypeScript y Vite para la interfaz de gestión de usuarios, registro y autenticación.

**🚀 Este proyecto está desplegado en [Netlify](https://www.netlify.com/)**

## Estructura del Proyecto

* **src/main.tsx**: Punto de entrada que renderiza la aplicación React.
* **src/router.tsx**: Configuración de React Router con todas las rutas de la aplicación.
* **src/views/**: Componentes de páginas (HomeView, Login, Register, Profile, etc.).
* **src/components/**: Componentes de UI reutilizables.
* **src/layouts/**: Componentes de layout para diferentes secciones de la app.
* **src/api/**: Funciones API para comunicarse con el backend.
* **src/types/**: Definiciones de tipos TypeScript.
* **src/utils/**: Funciones utilitarias.
* **src/config/**: Archivos de configuración (configuración de axios).

## Rutas Principales

* **/**: Página de inicio con funcionalidad de búsqueda.
* **/auth/login**: Página de inicio de sesión de usuario.
* **/auth/register**: Página de registro de usuario.
* **/admin**: Área de administración protegida para gestionar enlaces y perfil.
* **/:handle**: Visualización pública del perfil de usuario.

## Instalación

```bash
npm install
```

## Scripts

* **npm run dev**: Inicia el servidor de desarrollo con Vite.
* **npm run build**: Construye el proyecto para producción.
* **npm run lint**: Ejecuta ESLint para verificar la calidad del código.
* **npm run preview**: Previsualiza la construcción de producción localmente.

## Librerías Utilizadas

### Dependencias Principales

* **react**: Librería principal de React para construir interfaces de usuario.
* **react-dom**: Librería de renderizado DOM de React.
* **react-router-dom**: Enrutamiento del lado del cliente para aplicaciones de una sola página.
* **react-hook-form**: Librería de formularios con soporte de validación.
* **@tanstack/react-query**: Obtención de datos y gestión de estado.
* **axios**: Cliente HTTP para peticiones API.
* **tailwindcss**: Framework CSS utility-first para estilos.
* **@headlessui/react**: Componentes UI sin estilos y accesibles.
* **@heroicons/react**: Librería de iconos SVG.
* **@dnd-kit/core**: Funcionalidad de arrastrar y soltar.
* **sonner**: Librería de notificaciones toast.
* **react-slugify**: Generación de cadenas amigables para URL.

### Dependencias de Desarrollo

* **typescript**: Verificación de tipos estáticos para JavaScript.
* **vite**: Herramienta de construcción rápida y servidor de desarrollo.
* **@vitejs/plugin-react-swc**: Plugin de Vite para React con SWC.
* **eslint**: Herramienta de linting de código.
* **@tailwindcss/forms**: Plugin de Tailwind CSS para estilos de formularios.

## Configuración React + TypeScript + Vite

Este proyecto utiliza Vite como herramienta de construcción con React y TypeScript para una experiencia de desarrollo moderna.
