# React + TypeScript + Vite + Ant Design

This template provides a setup for working with React in Vite, including HMR (Hot Module Replacement) and ESLint rules. It also integrates Ant Design for UI components and react-router-dom for routing.

## Features

- React 18
- TypeScript
- Vite for fast builds
- Ant Design for UI components
- React Router for navigation
- ESLint + Prettier for code linting and formatting
- Dotenv for environment variable management

## Vite Official Plugins

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses Babel for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses SWC for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

1. Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}

Replace plugin:@typescript-eslint/recommended with plugin:@typescript-eslint/recommended-type-checked or plugin:@typescript-eslint/strict-type-checked
Optionally add plugin:@typescript-eslint/stylistic-type-checked
Install eslint-plugin-react and add plugin:react/recommended & plugin:react/jsx-runtime to the extends list

Included Packages

React + TypeScript + Vite
ESLint + Prettier
React Router
Ant Design
Dotenv

Getting Started

Clone this repository
Install dependencies:
Copynpm install

Start the development server:
Copynpm run dev


Available Scripts

npm run dev: Starts the development server
npm run build: Builds the app for production
npm run lint: Runs the linter
npm run preview: Previews the production build locally

Project Structure
Copy/src
  /components
  /pages
  /routes
  App.tsx
  main.tsx

/components: Reusable components
/pages: Page components for each route
/routes: Routing configuration

Additional Configuration
This project includes:

Basic React Router setup for navigation
Ant Design integration for UI components
Organized project structure

Contributing
Contributions are welcome. Please open an issue or submit a pull request with your changes.
License
MIT

🌐 English | Español

React + TypeScript + Vite + Ant Design
Este template proporciona una configuración para trabajar con React en Vite, incluyendo HMR (Hot Module Replacement) y reglas de ESLint. Además, integra Ant Design para la interfaz de usuario y react-router-dom para el enrutamiento.
Características

React 18
TypeScript
Vite para build rápido
Ant Design para componentes de UI
React Router para navegación
ESLint + Prettier para linting y formateo de código
Dotenv para manejo de variables de entorno

Plugins oficiales de Vite
Actualmente, dos plugins oficiales están disponibles:

@vitejs/plugin-react usa Babel para Fast Refresh
@vitejs/plugin-react-swc usa SWC para Fast Refresh

Ampliando la configuración de ESLint
Para aplicaciones de producción, se recomienda actualizar la configuración para habilitar reglas de lint con conocimiento de tipos:

Configura la propiedad parserOptions de nivel superior así:

jsCopyexport default {
  // otras reglas...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}

Reemplaza plugin:@typescript-eslint/recommended por plugin:@typescript-eslint/recommended-type-checked o plugin:@typescript-eslint/strict-type-checked
Opcionalmente, añade plugin:@typescript-eslint/stylistic-type-checked
Instala eslint-plugin-react y añade plugin:react/recommended & plugin:react/jsx-runtime a la lista de extends

Paquetes incluidos

React + TypeScript + Vite
ESLint + Prettier
React Router
Ant Design
Dotenv

Cómo empezar

Clona este repositorio
Instala las dependencias:
Copynpm install

Inicia el servidor de desarrollo:
Copynpm run dev


Scripts disponibles

npm run dev: Inicia el servidor de desarrollo
npm run build: Construye la aplicación para producción
npm run lint: Ejecuta el linter
npm run preview: Previsualiza la build de producción localmente

Estructura del proyecto
Copy/src
  /components
  /pages
  /routes
  App.tsx
  main.tsx

/components: Componentes reutilizables
/pages: Componentes de página para cada ruta
/routes: Configuración de rutas

Configuración adicional
Este proyecto incluye:

Configuración básica de React Router para navegación
Integración de Ant Design para componentes de UI
Estructura de proyecto organizada