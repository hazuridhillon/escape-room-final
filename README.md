# escape-room-final
# The Missing Statue — A Babson College Escape Room

A fully interactive browser-based escape room game set at Babson College, built as a final project for OIM3690 Web Technologies at Babson College.

## 🔗 Live Demo

[Play The Missing Statue](https://hazuridhillon.github.io/escape-room-final/)

## 🎮 Game Overview

Someone has stolen the Roger Babson statue overnight. Campus security is baffled. A mysterious thief has left clues scattered across campus — taunting whoever is brave enough to follow the trail. Can you solve every puzzle and bring Roger home?

## 📍 Rooms

- **The Dorm** — Wake up to a text from your roommate. Search your room for the first clue.
- **Trim Dining Hall** — Two puzzles stand between you and the next lead. Find what doesn't belong on the menu.
- **The Commons** *(optional detour)* — Get caught in a high-stakes poker game with fellow Babson students. Win three rounds to get information.
- **The Lecture Hall** — A riddle on the whiteboard holds the final answer.
- **The Campus Map** — Drag Roger Babson back to the globe plaza where he belongs.
- **Victory** — The statue returns.

## ✨ Features

- Multi-page game architecture with localStorage state management
- Shared 10-minute countdown timer across all rooms
- Animated iOS-style push notification on room entry
- Hidden object puzzles with decoy hotspots
- Interactive chalkboard menu with a hidden anomaly
- CSS-styled sticky note mechanic gating a puzzle
- Higher/Lower poker card game with best-of-three rounds
- Drag and drop statue restoration mechanic
- Full campus map drag-and-drop navigation
- Cinematic room transitions with CSS animations
- AI-generated illustrated backgrounds matching a cohesive art style
- Confetti victory animation
- Access control — players cannot skip rooms

## 🛠 Technologies Used

- HTML5
- CSS3 (custom properties, keyframe animations, flexbox, grid)
- Vanilla JavaScript (DOM manipulation, localStorage, HTML5 Drag and Drop API, setTimeout/setInterval)
- GitHub Pages (deployment)

## 🤖 AI Tools Used

- **Claude (Anthropic)** — Used throughout development for planning game architecture, writing and debugging all HTML/CSS/JavaScript, designing puzzle mechanics, and iterating on UI/UX decisions via Claude Code in VS Code
- **ChatGPT Image Generation** — Used to generate all illustrated room backgrounds in a consistent flat illustrated art style: dorm room, dining hall, lecture hall, campus map, globe plaza, title screen, poker room, and police crime scene photo

## 🧩 Challenges

- Managing game state across multiple HTML pages without a backend — solved using localStorage with access control checks on every room load
- Positioning invisible hotspots accurately over illustrated background images that scale with the viewport — required iterative percentage-based positioning
- Building a shared countdown timer that persists across page navigations — implemented by storing the timer start timestamp in localStorage and calculating remaining time on each page load
- Making the drag and drop mechanic work reliably across the campus map background — required careful z-index management and pointer-events handling on CSS overlay elements

## 🚀 Future Improvements

- Add ambient background audio and sound effects for puzzle interactions
- Mobile responsiveness — currently optimized for desktop
- A leaderboard tracking fastest completion times using a lightweight backend
- Additional rooms and puzzle types — cipher decoding, Simon Says pattern memory
- Animated character sprites reacting to player actions
- Difficulty settings — easy mode with more hints, hard mode with no glow indicators

## 👩‍💻 Author

Hazuri Dhillon — Babson College, Class of 2026
OIM3690 Web Technologies — Final Project