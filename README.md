# React + TypeScript + Vite + Ant Design

Este template proporciona una configuración para trabajar con React en Vite, incluyendo HMR (Hot Module Replacement) y reglas de ESLint. Además, integra Ant Design para la interfaz de usuario y react-router-dom para el enrutamiento.

## Características

- React 18
- TypeScript
- Vite para build rápido
- Ant Design para componentes de UI
- React Router para navegación
- ESLint + Prettier para linting y formateo de código
- Dotenv para manejo de variables de entorno

## Plugins oficiales de Vite

Actualmente, dos plugins oficiales están disponibles:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) usa Babel para Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) usa SWC para Fast Refresh

## Ampliando la configuración de ESLint

Para aplicaciones de producción, se recomienda actualizar la configuración para habilitar reglas de lint con conocimiento de tipos:

1. Configura la propiedad `parserOptions` de nivel superior así:

```js
export default {
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

Contribuir
Las contribuciones son bienvenidas. Por favor, abre un issue o realiza un pull request con tus cambios.
Licencia
MIT
Copy
Este README proporciona una visión completa del proyecto, incluyendo:

1. Una breve introducción
2. Las características principales
3. Información sobre los plugins de Vite
4. Guía para expandir la configuración de ESLint
5. Lista de paquetes incluidos
6. Instrucciones para comenzar
7. Scripts disponibles
8. Estructura del proyecto
9. Configuración adicional
10. Cómo contribuir
11. Información de la licencia

Puedes usar este README como base y personalizarlo según las necesidades específicas de tu proyecto, añadiendo o modificando secciones según sea necesario.
