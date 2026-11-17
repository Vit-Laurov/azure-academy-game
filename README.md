# Azure Academy — AZ-900 Quest Trainer

A gamified, offline-first web app for studying toward the Microsoft **AZ-900 (Azure Fundamentals)** certification — a 16-bit pixel-art RPG with daily quests, a quest map, loot crates, a boss fight and a Learn section, instead of a plain flashcard deck.

Built entirely in **vanilla HTML, CSS and JavaScript** — no frameworks, no build step, no backend. Hosted for free on GitHub Pages and installable as an app (PWA) on iPhone, Android and desktop. Works offline after the first visit.

**Current version:** v16.14

---

## Features

- **Daily quest map** — Easy Patrol → Explorer Quest → Heroic Challenge → Azure Lab → Boss. The hero walks the map as you progress; one big button always shows your next step.
- **JRPG question screen** — question in a dialogue box, answer menu, instant feedback with explanation from a guide character.
- **Boss fight** — JRPG battle against the Budget Golem: 3 HP vs 3 hearts, Heroic questions, the boss taunts you about your weakest topic.
- **Data-crate rewards** — loot "decrypts" in a terminal and appears in a hologram coloured by rarity (Common → Legendary), with 8-bit jingles.
- **XP, levels, Shards, streaks** — streak milestones and a Streak Freeze item; LEVEL UP and DAY CLEARED screens.
- **Loot Shop & pets** — 15 collectible items with real effects (XP bonuses, shard bonuses, themes, titles), pixel item icons framed by rarity, a JRPG "BUY? YES / NO" shopkeeper dialog, and 5 colour themes. Includes a Blob pet that cheers you on.
- **Mastery** — four topic tracks with unlimited ranks and permanent XP bonuses.
- **Weak Spot Review** — questions you missed come back for extra practice.
- **Azure Lab** — open-answer exercises in a terminal: explain a concept in your own words, get console-style feedback, a hint after a few tries.
- **Quest Log** — today's answers (and every Practice Exam attempt) as cleared / missed rows with explanations.
- **Practice Exam** — timed 10-question mock exam from a 90-question pool in the same dialogue-box style, ending in an EXAM REPORT with per-domain bars and a full review.
- **Learn** — 54 short lessons as quests in worlds (World 1 Beginner, World 2 Intermediate) and zones per exam domain, with real-world analogies and a guide who sums up each lesson.
- **Day / Night mode**, sound effects (with a TEST SOUND button; on iPhone they follow the silent switch), local hero name, export/import of progress.

## Question bank

| Bank | Questions |
|---|---|
| Easy | 108 |
| Normal | 114 |
| Heroic | 150 |
| Practical labs | 30 |
| Practice Exam pool | 90 |

## Install on your phone

1. Open the GitHub Pages link in **Safari** (iPhone) or **Chrome** (Android).
2. iPhone: Share → **Add to Home Screen**. Android: Chrome offers **Install app** (or menu ⋮ → Install).
3. Launch it from the home screen — full screen, works offline.

> Progress is stored on the device (localStorage). Removing the home-screen icon or clearing site data deletes it — use **Profile → Backup → Export** regularly. Cloud save is planned.

## Tech

- HTML / CSS / JavaScript, no dependencies
- Game rules in `engine.js` (no DOM) — screens only draw and call the engine
- Versioned save with migrations and automatic backup before each migration
- Service worker (network-first, offline fallback) + web app manifest
- Pixel art drawn in code (`pixelart.js`), 8-bit sounds via Web Audio

## Project structure

```
index.html            app shell, HUD, bottom navigation, overlays
pixel.css             the whole look ("Pixel Quest"): tokens, Day/Night, HUD, map, questions, exam, lab, dialogs, crate, boss
style.css             only for admin_guide.html (the app no longer loads it)
pixelart.js           sprites as text grids → crisp SVG
engine.js             game rules: daily flow, rewards, streak, review, boss rules (no DOM)
save.js               save/load, schema migrations, backups
app.js                screens and input, HUD, map, profile, export/import, sounds
bossfight.js          JRPG boss battle (drawing + animation)
chestfx.js            data-crate reward animation
fx.js                 LEVEL UP / DAY CLEARED / milestone toasts
loot.js               Loot Shop, item effects, pet
mastery.js            Mastery ranks
learn.js              Learn section
exam.js               Practice Exam
dailyfact.js          daily fact popup
practical.js          scoring of open-answer labs
database.js           questions, labs, exam pool, loot, lessons, facts
pwa.js / sw.js        service worker registration + offline cache
manifest.webmanifest  install metadata, icons/
admin_guide.html      standalone balancing tool
```

## Roadmap

- v16d: pixel redesign of Exam, Lab, History and popups (Learn, Shop, Collection, Mastery and Profile are done)
- Hands-free voice mode (read question aloud, answer by voice — for long drives)
- Accounts, cloud save and a friends leaderboard (Supabase)
- Push reminders at a time you choose
- AI explanations, AI grading of free answers, a boss that adapts to your weak spots

## Status & license

Personal learning project, actively evolving. Not affiliated with or endorsed by Microsoft. Question content is original, written for self-study.

All rights reserved. The code is publicly viewable so the app can be used and its construction seen, but no license is granted to copy, modify or redistribute it. Ask first if you'd like to use any part of it.
