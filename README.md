# 🎮 Azure Academy — AZ-900 Quest Trainer

A gamified, offline-first web app for studying toward the Microsoft **AZ-900 (Azure Fundamentals)** certification — daily quests, XP, loot, streaks, and a bite-sized learning section, instead of a plain flashcard deck.

Built entirely in **vanilla HTML, CSS, and JavaScript** — no frameworks, no build step, no backend, no accounts. It runs straight from static files, hosted for free on GitHub Pages, and works fully offline once loaded (progress is saved locally in the browser).

**▶️ Live demo:** *(add your GitHub Pages link here once it's live, e.g. `https://your-username.github.io/`)*

---

## Why this exists

Most exam-prep tools are a wall of flashcards. This is an attempt to make daily studying feel like something you actually want to open — RPG-style progression wrapped around real AZ-900 exam content, so showing up every day is its own small reward.

## Features

- **Daily Quests** — four difficulty modes (Easy Patrol, Explorer Quest, Heroic Challenge, Azure Lab) plus a Daily Campaign Chest for finishing all four
- **Streak system** — day-streak tracking with milestone rewards and a Streak Freeze item to protect against missing one day
- **Mastery system** — four topic tracks with unlimited ranks and permanent XP bonuses, so there's always something worth saving Shards for
- **Loot Shop** — 15 collectible items with real gameplay effects (XP bonuses, hint discounts, cosmetic themes), plus a floating pet companion
- **Weak Spot Review** — a bonus practice mode that recycles questions you've previously missed
- **Learn section** — 34 short, plain-language lessons (Beginner tier) covering core Azure concepts with real-world analogies, organized by topic
- **Daily Azure fact** — one bite-sized fact per day, cycling through a 41-fact bank
- **Sound effects** — lightweight Web Audio chimes, no audio files
- **Fully responsive** — desktop sidebar navigation, mobile slide-out drawer menu
- **Export / import progress** — back up or transfer your save as a JSON file

## Question bank

| Bank | Questions |
|---|---|
| Easy | 100 |
| Normal | 100 |
| Heroic | 75 |
| Practical labs | 30 |

All questions include a short explanation of why the correct answer is right (and why the others aren't), and wrong answers are recycled into a personal "weak spots" pool for extra review.

## Tech stack

- **HTML / CSS / JavaScript** — no frameworks, no npm, no build tools
- **localStorage** — all progress is saved locally in your browser (nothing is sent anywhere)
- **Web Audio API** — sound effects generated in code, no audio files
- Hosted on **GitHub Pages**, works equally well opened directly from a local file

## Running it

**Online:** just open the GitHub Pages link above.

**Locally:**
1. Clone or download this repository
2. Open `index.html` in any modern browser
3. That's it — no install, no server, no dependencies

**On mobile:** open the site in Safari/Chrome and use "Add to Home Screen" for an app-like, full-screen experience.

> ⚠️ Progress is stored per-browser via `localStorage`. Switching browsers, devices, or clearing site data starts you fresh unless you've exported a backup (Profile → Backup → Export progress).

## Project structure

```
index.html       — app shell, layout, all page containers
style.css        — design system and all styling
app.js           — core game logic, quiz flow, rendering
database.js      — question bank, labs, loot, mastery tracks, facts, lessons
save.js          — save/load state (localStorage)
loot.js          — Loot Shop, item effects, pet companion
mastery.js       — Mastery rank system
chestfx.js       — chest-opening animation
dailyfact.js     — daily fact popup
learn.js         — Learn section (lessons, progress tracking)
practical.js     — scoring for open-answer lab exercises
admin_guide.html — standalone tool for tuning drop rates / loot balance
```

## Status

This is a personal learning project, actively evolving. Not affiliated with or endorsed by Microsoft. Question content is original and written for self-study purposes.

> Note: as with any static, client-side-only web app, the deployed HTML/CSS/JS is technically visible to anyone via their browser's "View Page Source" — no repository setting changes that. The license above covers the legal right to reuse the code, not its visibility.

## License

All rights reserved. This code is publicly viewable for anyone who wants to try the app or see how it's built, but no license is granted to copy, modify, or redistribute it. If you'd like to use any part of this project, reach out first.
