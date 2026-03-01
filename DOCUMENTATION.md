# Portfolio Website Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Project Structure](#project-structure)
4. [Components](#components)
5. [Pages](#pages)
6. [Styling](#styling)
7. [Getting Started](#getting-started)
8. [Available Scripts](#available-scripts)

---

## Project Overview

This is a personal portfolio website built with React. It features a unique terminal/console-style UI design with a Tokyo Night color theme, showcasing personal information, skills, and professional details in an interactive terminal emulator aesthetic.

---

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19.2.0 | UI Framework |
| React DOM | 19.2.0 | React rendering for DOM |
| Vite | 7.3.1 | Build tool & dev server |
| Tailwind CSS | 4.2.1 | Utility-first CSS framework |
| @tailwindcss/vite | 4.2.1 | Tailwind Vite plugin |

---

## Project Structure

```
portfolio/
├── public/
│   └── vite.svg              # Vite favicon
├── src/
│   ├── assets/
│   │   └── react.svg         # React logo asset
│   ├── components/
│   │   ├── navbar.jsx        # Navigation component
│   │   └── logo.jsx          # ASCII art logo component
│   ├── pages/
│   │   └── Home.jsx          # Home page component
│   ├── App.css               # App-level styles
│   ├── App.jsx               # Main App component
│   ├── index.css             # Global styles
│   └── main.jsx              # Entry point
├── index.html                # HTML template
├── package.json              # Dependencies & scripts
├── eslint.config.js          # ESLint configuration
└── vite.config.js            # Vite configuration
```

---

## Components

### 1. Navbar Component (`src/components/navbar.jsx`)

A navigation bar component that provides links to different sections of the portfolio.

**Features:**
- Fixed navigation bar with dark background (`#161b22`)
- Navigation links: Home, About, Skills, Projects, Contact
- Responsive flexbox layout
- White text color for links
- No-underline links

**Implementation:**
```jsx
const Nav = () => {
  return (
    <nav className="flex justify-around h-10 items-center bg-[#161b22] text-white">
      <p className="text-white">Portfolio</p>
      <div className="flex gap-3 ">
        <a className="no-underline" href="/home">Home</a>
        <a className="no-underline" href="/about">About</a>
        <a className="no-underline" href="skills">Skills</a>
        <a className="no-underline" href="projects">Projects</a>
        <a className="no-underline" href="contact">Contact</a>
      </div>
    </nav>
  )
}
```

**Styling Details:**
- Background: `#161b22` (GitHub dark)
- Height: 40px (h-10)
- Layout: Flexbox with space-around justify
- Link gap: 12px (gap-3)
- Text color: White

---

### 2. Logo Component (`src/components/logo.jsx`)

An ASCII art logo component that displays the name "KABIN" in a decorative text format.

**Features:**
- Displays ASCII art representation of "KABIN"
- Uses monospace font for consistent character spacing
- Cyan/teal color (`#00ffcc`) for retro terminal look
- Tokyo Night theme background (`#1a1b26`)
- Rounded container with padding

**Implementation:**
```jsx
const KabinLogo = () => {
  const ascii = `
  __    __           __        __
 |  \\  /  \\         |  \\      |  \\
 | $$ /  $$ ______  | $$____   \\$$ _______
 | $$/  $$ |      \\ | $$    \\ |  \\|       \\
 | $$  $$   \\$$$$$$\\| $$$$$$$\\| $$| $$$$$$$\\
 | $$$$$\\  /      $$| $$  | $$| $$| $$  | $$
 | $$ \\$$\\|  $$$$$$$| $$__/ $$| $$| $$  | $$
 | $$  \\$$\\$$    $$| $$    $$| $$| $$  | $$
  \\$$   \\$$ \\$$$$$$$ \\$$$$$$$  \\$$ \\$$   \\$$
  `;
  return (
    <div style={{ background: '#1a1b26', padding: '20px', borderRadius: '8px' }}>
      <pre
        style={{
          color: '#00ffcc',
          fontFamily: 'monospace',
          lineHeight: '1.2',
          margin: 0
        }}
        aria-label="Kabin Logo"
      >
        {ascii}
      </pre>
    </div>
  )
}
```

**Styling Details:**
- ASCII text color: `#00ffcc` (Cyan)
- Background: `#1a1b26` (Tokyo Night dark)
- Padding: 20px
- Border radius: 8px
- Font: Monospace
- Line height: 1.2

---

## Pages

### Home Page (`src/pages/Home.jsx`)

The main landing page featuring a terminal emulator-style interface displaying personal information.

**Features:**
- Full-screen layout with centered content
- Terminal window with title bar (macOS style)
- Window controls (red, yellow, green dots)
- ASCII art logo display
- Personal information in key-value format
- Skills and technology stack display

**Layout Structure:**
```
┌─────────────────────────────────────────────┐
│ Navbar                                      │
├─────────────────────────────────────────────┤
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │ ● ● terminal - home                │   │
│  ├─────────────────────────────────────┤   │
│  │                                     │   │
│  │  [ASCII Logo]    Personal Info     │   │
│  │                 - Name: Kabin      │   │
│  │                 - Role: Backend    │   │
│  │                 - Location: Toronto│   │
│  │                 - Email: ...       │   │
│  │                 - Uptime: 1 year    │   │
│  │                                     │   │
│  │                 Skills:             │   │
│  │                 - Shell: JS        │   │
│  │                 - DE: React, etc   │   │
│  │                 - Theme: Tokyo Night│  │
│  │                                     │   │
│  └─────────────────────────────────────┘   │
│                                             │
└─────────────────────────────────────────────┘
```

**Color Palette (Tokyo Night Theme):**

| Element | Color Code | Usage |
|---------|------------|-------|
| Primary | `#4c90e9` | Username (`kabinghale @portfolio`) |
| Accent | `#cb5e75` | Labels (Name, Role, Location, etc.) |
| Secondary | `#838cb0` | Values and dividers |
| Terminal BG | `#1a1b26` | Terminal background |
| Header BG | `#24283b` | Terminal title bar |
| Window BG | `#a1b0c2` | Window outer border |

**Personal Information Displayed:**
- Name: Kabin Ghale
- Role: Backend Dev
- Location: Toronto, Canada
- Email: kabinghale1@gmail.com
- Uptime: 1 year in development
- Shell: Javascript
- DE (Development Environment): React, NextJS, Vue.js
- Theme: Tokyo Night

**Implementation Details:**
```jsx
const Home = () => {
  return (
    <>
      <Nav />
      <div className="w-full h-screen flex items-center justify-center bg-black">
        <div className="w-7/10 h-6/10 bg-gray-500 rounded">
          {/* Terminal Title Bar */}
          <div className="flex bg-[#24283b] text-[#404971] justify-between h-6 text-sm rounded-t">
            <div className="flex space-x-2 justify-between p-3 items-center">
              <div className="w-3 h-3 bg-rose-500 rounded-full"></div>
              <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
              <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
            </div>
            <div className="">terminal - home</div>
            <div className="w-12"></div>
          </div>

          {/* Terminal<div className=" Content */}
          w-full h-full justify-even gap-5 flexly p-4 bg-[#1            <div] rounded-b">
>
              <Kabin</div>
             Personal<div>
              {/*a1b26Logo />
             Info */}
            </div>
          </div>
        </div>
    </>
  )
}
```

---

>
      </div## Styl Styles (`src/index the Tailwind CSS.css`)

Containsing

### Global import for utility classes.

```css
@import "tailwindcss"
```

### App Styles (`src/App.css`)

Empty file - available-specific styles.

---

 for component## Getting Started

### Prerequisites

- Node.js (recommended)
- npm or yarn: 18+

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

The development server will typically at `http start,://localhost:5173`

### Build for Production

```bash
# Create production build
npm run build
```

### Preview Production Build

```bash
# Preview the production build
npm run preview
```

### Linting

```bash
# Run ESLint
npm run lint
```

---

## Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| dev | `vite` | Start development server |
| build | `vite build` | Build for production |
| preview | `vite preview` | Preview production build |
| lint | `eslint .` | Run ESLint |

---

## Dependencies

### Production Dependencies

```json
{
  "@tailwindcss/vite": "^4.2.1",
  "react": "^19.2.0",
  "react-dom": "^19.2.0",
  "tailwindcss": "^4.2.1"
}
```

### Development Dependencies

```json
{
  "@eslint/js": "^9.39.1",
  "@types/react": "^19.2.7",
  "@types/react-dom": "^19.2.3",
  "@vitejs/plugin-react": "^5.1.1",
  "eslint": "^9.39.1",
  "eslint-plugin-react-hooks": "^7.0.1",
  "eslint-plugin-react-refresh": "^0.4.24",
  "globals": "^16.5.0",
  "vite": "^7.3.1"
}
```

---

## Entry Point

### Main Entry (`src/main.jsx`)

The React application entry point that renders the App component.

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

**Key Points:**
- Uses React 19's `createRoot` API
- Wrapped in `<StrictMode>` for development warnings
- Mounts to DOM element with id `root`
- Imports global styles from `index.css`

### App Component (`src/App.jsx`)

The root component that renders the Home page.

```jsx
import './App.css'
import Home from "./pages/Home.jsx"

function App() {
  return (
    <>
      <Home />
    </>
  )
}

export default App
```

---

## Design System

### Typography
- Font family: System default for UI, Monospace for terminal/ASCII
- Terminal text: Monospace

### Colors
- Primary background: Black (`#000000`)
- Terminal background: `#1a1b26`
- Terminal header: `#24283b`
- Accent (Pink): `#cb5e75`
- Primary text (Blue): `#4c90e9`
- Secondary text: `#838cb0`

### Window Controls (macOS Style)
- Close (Red): `#f87171` / `bg-rose-500`
- Minimize (Yellow): `#fbbf24` / `bg-amber-500`
- Maximize (Green): `#34d399` / `bg-emerald-500`

---

## Future Enhancements

Potential improvements for the portfolio:
- Add routing for About, Skills, Projects, and Contact pages
- Implement interactive terminal with command input
- Add animations for terminal text typing effect
- Include project showcase section
- Add contact form with backend integration
- Implement dark/light theme toggle
- Add responsive design for mobile devices

---

## License

Private - Personal Portfolio
