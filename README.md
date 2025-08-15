# SVJeez

Go Beyond Static. Create Stunning Animated SVGs in Seconds.

SVJeez is the modern toolkit for creating lightweight, production-ready vector images and animations. From mesmerizing waves to morphing blobs, SVJeez lets you generate, animate, and export beautiful SVGs for your website or app—no complex software or code required.

Free, forever. No credit card required.

## Features

- 🎨 **Generate Your Perfect Shape**: Start with versatile presets—waves, blobs, circuits, stacked peaks, and more. Use intuitive sliders to customize every detail.
- ✨ **Bring It to Life**: Apply one-click animation presets like 'Pulse', 'Flow', or 'Morph'. Fine-tune speed and intensity for a custom feel.
- 🚀 **Export & Deploy Instantly**: Grab highly-optimized SVG code with embedded CSS animations. Copy, paste, and make your site stand out.
- � **Mesmerizing Hero Backgrounds**: Subtle, looping animations that hook visitors from the first second.
- � **Dynamic Section Dividers**: Elegant, animated waves and shapes for seamless transitions.
- �️ **Interactive Icons & Logos**: Add pulsing or morphing effects to icons on hover.
- 📱 **Engaging Social Media Content**: Export as GIFs or video clips to boost your posts.
- ⏳ **Unique Loading Indicators**: Replace generic spinners with animated elements that reflect your brand.

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
