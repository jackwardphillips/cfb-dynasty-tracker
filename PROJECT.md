# CFB 27 Dynasty Dashboard Checklist

## Goal

Turn the current ESPN-style mockup into an interactive static webpage for tracking a two-user College Football 27 dynasty.

## Current Dynasty Setup

- San Diego State
  - Head coach: Donnel Pumphrey
- Fresno State
  - Head coach: David Carr

## Phase 1: Static Data Extraction

- [x] Create a separate data file for dynasty content.
- [x] Move repeated page data out of the HTML:
  - [x] Score ticker games
  - [x] Hero story
  - [x] Story cards
  - [x] Headlines
  - [x] Recent scores
  - [x] Rankings
  - [x] Trending items
- [x] Render those sections from JavaScript.
- [x] Keep the existing visual design intact.

## Phase 2: Dynasty-Specific Views

- [ ] Add a dashboard summary for both user teams.
- [ ] Add a schedule/results view.
- [ ] Add a standings/rankings view.
- [ ] Add a recruiting view.
- [ ] Add a rivalry/history view for user-vs-user games.

## Phase 3: Manual Weekly Updates

- [ ] Decide the weekly update format.
- [ ] Add new games, rankings, headlines, and recruiting notes by editing the data file.
- [ ] Keep one source of truth for records and scores.

## Phase 4: Optional Interactivity

- [ ] Add filters for team, week, and season.
- [ ] Add simple edit forms if manual JSON editing becomes annoying.
- [ ] Consider browser local storage or a tiny backend only if needed.
