# Azure Academy — AZ-900 Quest Trainer

A gamified, offline-first web app for studying toward the Microsoft **AZ-900 (Azure Fundamentals)** certification — a 16-bit pixel-art RPG with daily quests, a quest map, loot crates, a boss fight and a Learn section, instead of a plain flashcard deck.

Built entirely in **vanilla HTML, CSS and JavaScript** — no frameworks, no build step, no backend. Hosted for free on GitHub Pages and installable as an app (PWA) on iPhone, Android and desktop. Works offline after the first visit.

**Current version:** v16.3

---

## Features

- **Daily quest map** — Easy Patrol → Explorer Quest → Heroic Challenge → Azure Lab → Boss. The hero walks the map as you progress; one big button always shows your next step.
- **JRPG question screen** — question in a dialogue box, answer menu, instant feedback with explanation from a guide character.
- **Boss fight** — JRPG battle against the Budget Golem: 3 HP vs 3 hearts, Heroic questions, the boss taunts you about your weakest topic.
- **Data-crate rewards** — loot "decrypts" in a terminal and appears in a hologram coloured by rarity (Common → Legendary), with 8-bit jingles.
- **XP, levels, Shards, streaks** — streak milestones and a Streak Freeze item; LEVEL UP and DAY CLEARED screens.
- **Loot & pets** — 15 collectible items with real effects (XP bonuses, shard bonuses, themes, titles), including a Blob pet that cheers you on.
- **Mastery** — four topic tracks with unlimited ranks and permanent XP bonuses.
- **Weak Spot Review** — questions you missed come back for extra practice.
- **Practice Exam** — timed 10-question mock exam from a 90-question pool, with per-domain results and history.
- **Learn** — 54 short lessons (Beginner + Intermediate) with real-world analogies.
- **Day / Night mode**, sound effects, local profile name, export/import of progress.

## Question bank

| Bank | Questions |
|---|---|
| Easy | 108 |
| Normal | 114 |
| Heroic | 81 |
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
style.css             base styles (v14) — overridden by pixel.css
pixel.css             "Pixel Quest" look: tokens, Day/Night, HUD, map, question screen, crate, boss
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

- v16c–v16d: pixel redesign of Learn, Shop, Collection, Mastery, Profile, Exam, Lab, History and popups
- Hands-free voice mode (read question aloud, answer by voice — for long drives)
- Accounts, cloud save and a friends leaderboard (Supabase)
- Push reminders at a time you choose
- AI explanations, AI grading of free answers, a boss that adapts to your weak spots

## Status & license

Personal learning project, actively evolving. Not affiliated with or endorsed by Microsoft. Question content is original, written for self-study.

All rights reserved. The code is publicly viewable so the app can be used and its construction seen, but no license is granted to copy, modify or redistribute it. Ask first if you'd like to use any part of it.
