# Project Name

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Running the Application Locally](#running-the-application-locally)
- [Design Decisions](#design-decisions)
- [Additional Documentation](#additional-documentation)

## Overview

This repository contains the source code for my Alma coding assesment. The application is built using modern web technologies, leveraging React, Next.js, and Material UI for the frontend, while incorporating state management with Redux Toolkit and server-state management with React Query.

## Tech Stack

The project utilizes the following dependencies:

```json
"dependencies": {
  "@emotion/react": "^11.14.0",
  "@emotion/styled": "^11.14.0",
  "@mui/icons-material": "^6.4.5",
  "@mui/material": "^6.4.5",
  "@radix-ui/react-select": "^2.1.6",
  "@reduxjs/toolkit": "^2.5.1",
  "@tanstack/react-query": "^5.66.7",
  "@tanstack/react-table": "^8.21.2",
  "class-variance-authority": "^0.7.1",
  "clsx": "^2.1.1",
  "countries-list": "^3.1.1",
  "lucide-react": "^0.475.0",
  "next": "15.1.7",
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "react-redux": "^9.2.0",
  "react-select": "^5.10.0",
  "tailwind-merge": "^3.0.1",
  "uuid": "^11.0.5"
}
```

## Getting Started

### Prerequisites

Ensure you have the following installed before proceeding:

- Node.js (>= 18.x)
- npm or yarn

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/project-name.git
   ```
2. Navigate into the project directory:
   ```sh
   cd project-name
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
   or using yarn:
   ```sh
   yarn install
   ```

## Running the Application Locally

### Development Mode

To start the development server:

```sh
npm run dev
```

Or if using yarn:

```sh
yarn dev
```

The application will be available at `http://localhost:3000/`.

### Production Mode

To build and serve the application in production mode:

```sh
npm run build
npm run start
```

Or if using yarn:

```sh
yarn build
yarn start
```

## Design Decisions

For detailed insights into the architectural and design decisions made in this project, refer to the [Design Document](./docs/DESIGN.md).

## Additional Documentation

- **API Documentation**: [API_DOCS.md](./docs/API_DOCS.md)
- **Component Guide**: [COMPONENTS.md](./docs/COMPONENTS.md)

