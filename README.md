# React Showcase

A React learning project that demonstrates core frontend concepts through interactive examples, including props, state, effects, conditional rendering, routing, and form handling.

## Overview

This project was created as a hands-on React practice app for exploring the fundamentals of component-based UI development. Instead of focusing on a single feature, the app presents several React concepts in a single interface so they can be learned and reviewed quickly.

The application is intentionally simple and educational. It highlights how React state, events, conditional logic, form inputs, and route-based navigation work together in a small front-end app.

## Features

- Reusable React components
- Props-driven child components
- State updates with useState
- Side effects with useEffect
- Conditional rendering patterns
- Form input handling and validation
- Route-based navigation using React Router
- Responsive sidebar layout and concept cards
- Quick reference cheatsheet page

## Screenshots

No screenshots are included in this repository yet. Add a screenshot section later when the app is captured visually for portfolio use.

## Tech Stack

- React 19
- Vite
- JavaScript (ES modules)
- React Router DOM
- HTML5
- CSS3

## Architecture / Workflow

The app follows a simple single-page React structure:

- `src/App.jsx` defines the routed application layout and the main landing page.
- `src/components/Sidebar.jsx` provides navigation across sections.
- `src/concepts/` contains interactive examples for individual React concepts.
- `src/pages/` contains explanatory pages such as the React Router overview and cheatsheet.
- `src/style/` stores the visual styling for the concept demos.

Each concept is isolated in its own component, making the application easy to understand and extend while learning React fundamentals.

## Project Structure

```text
src/
├── components/
│   ├── ErrorBoundary.jsx
│   └── Sidebar.jsx
├── concepts/
│   ├── ConditionalDemo.jsx
│   ├── Forms.jsx
│   ├── Props.jsx
│   ├── UseEffects.jsx
│   └── UseStates.jsx
├── pages/
│   ├── About.jsx
│   ├── Cheatsheet.jsx
│   └── Home.jsx
├── style/
│   ├── ConditionalDemo.css
│   ├── Forms.css
│   ├── page.css
│   ├── props.css
│   ├── UseEffects.css
│   ├── UseStates.css
│   └── ...
├── App.jsx
├── index.css
├── main.jsx
├── App.css
├── ...
```

## Installation

```bash
git clone https://github.com/Farhan-Shaikh20/react-showcase.git
cd react-showcase
npm install
```

## Configuration

This project does not currently require environment variables or external credentials to run locally.

No API keys, database credentials, or private configuration are required for the current implementation.

## Usage

Start the development server:

```bash
npm run dev
```

Then open the local Vite URL shown in the terminal in your browser.

## Security

This repository is a front-end learning project and does not include a backend, database, or secret management layer.

Security considerations for this project:

- No hardcoded credentials are used in the source code.
- No secrets are stored in the repository.
- No production deployment configuration is included.
- Local development only; do not commit `.env` files or personal configuration.

## Future Improvements

- Add a dark mode option
- Add a dedicated project landing page
- Introduce testing with React Testing Library
- Add more React hook examples
- Improve the visual polish for recruiter presentation

## Author

Farhan Shaikh
GitHub: https://github.com/Farhan-Shaikh20

