# Mariza 3D Website

A modern, animated React application built with Vite and Tailwind CSS.

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16.0.0 or higher)
- npm (v7.0.0 or higher)

### Installation

1.  Clone the repository or navigate to the project directory:
    ```bash
    cd c:/Users/Adilkan/Documents/Mariza_3D_website
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

### 🏃 Running Locally (Development)

Start the development server with hot-reload:
```bash
npm run dev
```

Project will be running at `http://localhost:5173` (check terminal for exact port).

### 🏗️ Building for Production

Build the app for production (generates `dist` folder):
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

## 🛠️ Configuration

- **Vite**: Configuration in `vite.config.ts`.
- **Tailwind CSS**: Configured via Vite plugin (`@tailwindcss/vite`).
- **Styles**: Global styles located in `src/styles`.

## 📂 Project Structure

```
src/
├── app/
│   ├── components/   # Reusable UI components
│   └── App.tsx       # Main application component
├── styles/           # specialized CSS files (fonts, theme)
└── main.tsx          # Application entry point
```