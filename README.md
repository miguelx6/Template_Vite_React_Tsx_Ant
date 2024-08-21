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
```
Replace plugin:@typescript-eslint/recommended with plugin:@typescript-eslint/recommended-type-checked or plugin:@typescript-eslint/strict-type-checked
Optionally add plugin:@typescript-eslint/stylistic-type-checked
Install eslint-plugin-react and add plugin:react/recommended & plugin:react/jsx-runtime to the extends list

## Included Packages

React + TypeScript + Vite
ESLint + Prettier
React Router
Ant Design
Dotenv

## Getting Started

Clone this repository
Install dependencies:
Copynpm install

## Start the development server:
npm run dev


## Available Scripts

npm run dev: Starts the development server
npm run build: Builds the app for production
npm run lint: Runs the linter
npm run preview: Previews the production build locally

## Project Structure
Copy/src
  /components
  /pages
  /routes
  App.tsx
  main.tsx

/components: Reusable components
/pages: Page components for each route
/routes: Routing configuration

## Additional Configuration
This project includes:

Basic React Router setup for navigation
Ant Design integration for UI components
Organized project structure

