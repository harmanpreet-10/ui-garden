# UI Garden — React Component Library

## Project Overview

UI Garden is a reusable React component library created using React, TypeScript, Storybook, and styled-components.

The project demonstrates how to develop reusable user interface components, document them using Storybook, test their functionality, and deploy a React application using Docker.

## Technologies Used

- React
- TypeScript
- Storybook
- styled-components
- Jest
- React Testing Library
- Docker
- Nginx

## Features

The UI Garden project includes a reusable Button component with the following features:

- Custom button text
- Custom background colors
- Disabled button functionality
- Responsive styling for mobile screens
- Keyboard focus styling
- Interactive Storybook documentation
- Automated component tests

## Project Folder Structure

```text
ui-garden/
├── .storybook/
│   ├── main.ts
│   └── preview.tsx
├── public/
├── src/
│   ├── components/
│   │   └── Button/
│   │       ├── Button.tsx
│   │       ├── Button.types.tsx
│   │       ├── Button.stories.tsx
│   │       ├── Button.test.tsx
│   │       └── index.ts
│   ├── App.tsx
│   ├── App.css
│   └── App.test.tsx
├── .dockerignore
├── Dockerfile
├── package.json
├── package-lock.json
├── README.md
└── tsconfig.json
```

## Installation

Open a terminal in the UI Garden project folder and install the required dependencies:

```bash
npm install --legacy-peer-deps
```

## Run the React Application

```bash
npm start
```

Open http://localhost:3000 in your browser.

The React application displays the UI Garden heading and four Button examples.

## Run Storybook

```bash
npm run storybook
```

Open http://localhost:6006 in your browser.

Storybook includes four Button stories:

1. Default Button — Blue
2. Disabled Button — Grey
3. Green Button — Green
4. Red Button — Red

Storybook also provides interactive controls and automatically generated component documentation.

## Button Component Usage

Import the reusable Button component:

```tsx
import { Button } from './components/Button/Button';
```

Example:

```tsx
<Button text="Default Button" />

<Button
  text="Green Button"
  backgroundColor="#28a745"
/>

<Button
  text="Red Button"
  backgroundColor="#dc3545"
/>

<Button
  text="Disabled Button"
  disabled
/>
```

## Styling and Responsive Design

The Button component uses the styled-components library for styling.

The component supports customizable colors, hover effects, keyboard focus styles, and a disabled state.

Media queries are used to improve the layout on smaller screens.

## Automated Testing

The project uses Jest and React Testing Library to test the application and Button component.

Run the tests:

```bash
npm test -- --watchAll=false
```

The automated tests check component rendering, disabled functionality, and custom background colors.

Latest verified result:

- Test suites: 2 passed
- Tests: 4 passed
- Failed tests: 0

## TypeScript Validation

Run:

```bash
npx tsc --noEmit --pretty false
```

This checks TypeScript code without generating additional files.

## Production Build

Run:

```bash
npm run build
```

This creates an optimized production version of the application inside the `build` folder.

The production build has been verified to compile successfully.

## Docker Setup

Docker is used to containerize and serve the React application.

The Dockerfile uses a Node.js build stage and Nginx to serve the generated production files.

Make sure Docker Desktop is running.

Build the Docker image:

```bash
docker build -t ui-garden .
```

Run the Docker container:

```bash
docker run --rm -p 8083:80 ui-garden
```

Open http://localhost:8083 in your browser.

The Docker application displays the UI Garden heading and four Button examples.

To stop the running container, press Ctrl + C in the terminal.

## Conclusion

UI Garden demonstrates the development of a reusable React component library using TypeScript, styled-components, and Storybook.

The project includes component documentation, responsive styling, automated tests, a production build, and Docker deployment.


## Assignment 12 — Required deployment

The production site must be accessible at **http://localhost:8083**.

```powershell
npm install --legacy-peer-deps
npm run storybook
npm test -- --watchAll=false
npm run build
docker build -t ui-garden .
docker run -d --name Kaur_Harmanpreet_coding_assignment12 -p 8083:80 ui-garden
docker ps
docker exec Kaur_Harmanpreet_coding_assignment12 pwd
```

The Docker working directory must print `/Kaur_Harmanpreet_ui_garden`.

The component library includes Button, Label, Text, Table, TableHeader, TableRow, TableCell, TableFooter, Dropdown, RadioButton, Img, HeroImage and Card. Each component includes a TypeScript component, types, Storybook stories with editable controls and Default/Disabled states, tests for visibility and disabled background styling, and an index export.

The disabled state of non-interactive HTML elements uses `aria-disabled` and CSS to visibly grey out and suppress pointer interactions. Native controls use their `disabled` attribute.

Verify the Docker site by visiting http://localhost:8083. Storybook is available at http://localhost:6006 while `npm run storybook` is running.
