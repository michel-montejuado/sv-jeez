---
applyTo: "**/*"
---

# GitHub Copilot Instructions for SVJeez

These instructions are for GitHub Copilot and other AI coding assistants. Please follow these guidelines to ensure code quality, consistency, and maintainability in this Deno + Vite + React project.

## General Guidelines

- Use TypeScript for all code in `src/` (`.ts`/`.tsx`).
- Match the existing code style: indentation, naming, and import style.
- Use functional React components and hooks.
- Prefer native ES modules (`import`/`export`), not CommonJS.
- Do not use Node.js APIs; target Deno and browser environments only.
- Avoid direct DOM manipulation; use React for UI updates.
- Keep code modular: components in `src/components/`, hooks in `src/hooks/`, utilities in `src/utils/`, etc.
- Use Vite conventions for static assets (`public/`) and environment variables.

## React & UI

- Use function components, not class components.
- Prefer React hooks for state and side effects.
- Organize components by domain (e.g., `components/branding/Logo.tsx`).
- Always type props with TypeScript interfaces or types.
- Avoid inline styles; use CSS modules, styled-components, or Tailwind (if present), otherwise use `className` and external CSS.

## Deno & Vite

- Ensure all code runs in Deno; use Deno standard library where possible.
- Only use packages compatible with Deno and Vite.
- Update `deno.json` for new dependencies or tasks.
- Update `vite.config.ts` for build or plugin changes.

## Localization

- Use `src/l10n/` for localization; add or update translations here.

## Documentation

- Add JSDoc for exported functions, components, and complex logic.
- Update `README.md` for major changes or new features.

## Testing

- If tests are present, add or update them for new features or bug fixes. Place tests alongside the code or in a `__tests__` folder.

## Pull Requests & Commits

- Write clear, descriptive pull requests and commit messages.
- Make atomic commits for each logical change.

## AI/Assistant-specific

- Never introduce Node.js-specific code.
- Never use deprecated APIs.
- Never add secrets or credentials.
- Never change project structure without a clear reason.
- Always match the project's code style and conventions.

---

These instructions are enforced for all Copilot and AI-generated code in this repository.
