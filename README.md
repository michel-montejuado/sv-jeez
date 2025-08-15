# SVJeez

SVJeez is a modern web application starter built with [Deno](https://deno.com/), [Vite](https://vitejs.dev/), and [React](https://react.dev/), featuring Material UI, TypeScript, and i18n support. It provides a clean, scalable foundation for building robust, fast, and maintainable web apps.

## Features

- ⚡ **Vite** for lightning-fast development and builds
- 🦕 **Deno** runtime with npm compatibility
- ⚛️ **React 19** with functional components and hooks
- 🎨 **Material UI** for beautiful, accessible UI
- 🌗 **Color mode** (light/dark) toggle
- 🌍 **i18n** with `react-i18next`
- 🗂️ Modular file structure and aliasing (`@/`)
- 🧩 Ready-to-extend layout, navigation, and theming

## Getting Started

### Prerequisites

- [Deno](https://deno.com/manual/getting_started/installation) v1.44+

### Development

```sh
deno task dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```sh
deno task build
```

Output will be in the `dist/` folder.

### Preview

```sh
deno task preview
```

Serves the production build locally.

## Project Structure

```text
src/
	App.tsx           # Main app component
	main.tsx          # Entry point
	components/       # Reusable UI components
	pages/            # Route-based pages
	theme/            # MUI theme config
	hooks/            # Custom React hooks
	l10n/             # Localization setup
	utils/            # Utility functions
public/             # Static assets
vite.config.ts      # Vite configuration
deno.json           # Deno tasks and imports
```

## Tech Stack

- Deno
- Vite
- React 19
- Material UI
- TypeScript
- react-router
- react-i18next

## License

MIT
