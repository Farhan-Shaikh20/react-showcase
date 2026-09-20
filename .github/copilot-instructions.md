# GitHub Copilot instructions for react-showcase

## Project overview

This repository is a small React learning project designed to demonstrate key frontend concepts in one application. It is intended for educational and portfolio use, not for production deployment.

## Important structure

- `src/App.jsx` defines the app layout and route configuration.
- `src/components/Sidebar.jsx` provides the sidebar navigation.
- `src/concepts/` contains interactive demos for props, state, effects, routing, and forms.
- `src/pages/` contains explanatory pages like the router overview and cheatsheet.
- `src/style/` stores component styling.

## Setup commands

```bash
npm install
npm run dev
```

## Validation commands

```bash
npm run build
npm run lint
```

## Coding conventions

- Keep the app simple and educational.
- Prefer small, readable components.
- Use clear, consistent naming.
- Keep demonstration code easy to understand.
- Do not add unnecessary libraries or rewrite the app into a different architecture.
- Remove default template content and stale comments when they are not relevant to the project.

## Technical constraints

- This is a React + Vite front-end application.
- It uses client-side routing with `react-router-dom`.
- Do not add backend or database dependencies unless the project explicitly requires them.
- Do not invent features, deployment URLs, screenshots, or credentials.

## Security requirements

- Never commit secrets, real credentials, API keys, or environment values.
- Use placeholders or clearly fake demo values when examples require sample data.
- Keep local `.env` files out of version control.
- Avoid adding analytics or auth systems that are not part of the current project.

## AI agent guidance

When making changes:

- Preserve the educational nature of the project.
- Keep the repository professional and recruiter-friendly.
- Remove template leftovers and dead code that do not contribute to the learning goal.
- Keep documentation accurate to what the code actually implements.
- Prefer small, maintainable improvements over broad rewrites.
