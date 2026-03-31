# 🎮 Tic Tac Toe

A browser-based Tic Tac Toe game with multiplayer and single-player (vs CPU) modes.

![React](https://img.shields.io/badge/React-19-blue)
![Vite](https://img.shields.io/badge/Vite-8-purple)
![SCSS Modules](https://img.shields.io/badge/SCSS-Modules-pink)

## ✨ Features

- **Two game modes** — PvP (two players) and PvE (against the computer)
- **Side selection** — choose to play as X or O before the game starts
- **Responsive layout** — optimized for mobile (≤510px) and desktop screens
- **Hover states** — interactive hints when hovering over buttons and empty squares
- **Winning line highlight** — winning squares are visually highlighted
- **Score tracking** — tracks X wins, O wins, and draws
- **State persistence** — game score and board state are saved in `localStorage`
- **Smooth animations** — sliding toggle for player selection

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| **React 19** | UI library |
| **React Router 7** | Routing (start screen ↔ game) |
| **Vite 8** | Bundler and dev server |
| **SCSS Modules** | Component styling |
| **localStorage** | Game state persistence |

## 📁 Project Structure

```
src/
├── components/
│   ├── Board/            # Game board
│   ├── BoardHeader/      # Header with logo, turn indicator, and reset button
│   ├── ResultModal/      # Result modal (win / draw)
│   ├── ScoreBoard/       # Score table
│   ├── Square/           # Game board cell
│   ├── StartScreen/      # Start screen with player and mode selection
│   └── icons/            # SVG icons as React components
├── hooks/
│   └── useTicTacToe.js   # Core game logic (state, moves, scoring, CPU)
├── utils/
│   └── gameLogic.js      # Winner detection
├── styles/               # Global styles, fonts, CSS variables, normalize
├── assets/               # SVG assets
├── App.jsx               # Routing
├── BoardRow.jsx          # Row of 3 squares
└── main.jsx              # Entry point
```

## 🚀 Getting Started

```bash
# Clone the repository
git clone <url>
cd TicTacToe

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The app will be available at `http://localhost:5173`

## 📦 Build

```bash
npm run build
```

The production build will be output to the `dist/` folder.
