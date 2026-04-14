# 🗓️ 30-Day Execution Plan — Church Attendance Counter

---

## ⬛ WEEK 1 — Foundation & Backend Core

### DAY 1 — Project Setup & Folder Structure

**Objective:** Get the skeleton standing.

**Checklist:**

- [ ] Create root folder `church-counter/`
- [ ] Initialise `server/`:
  - [ ] `npm init -y`
  - [ ] Install: express, cors, dotenv, socket.io, @supabase/supabase-js, csv-stringify, typescript, ts-node, nodemon
- [ ] Initialise `client/`:
  - [ ] `npm create vite@latest client -- --template react-ts`
- [ ] Install client deps:
  - [ ] tailwindcss, socket.io-client, axios
- [ ] Set up `tsconfig.json` for server
- [ ] Create folders:
  - [ ] controllers/, routes/, services/, sockets/, middleware/, config/
- [ ] Create placeholder files for all modules
- [ ] Create `.env` with placeholder keys
- [ ] Add `/health` route

**Definition of Done:**

- `ts-node src/index.ts` runs
- `/health` returns `{ status: "ok" }`

---

### DAY 2 — Supabase Setup & Database Schema

**Objective:** Database is live.

**Checklist:**

- [ ] Create Supabase project
- [ ] Create tables:
  - [ ] services
  - [ ] sections
  - [ ] attendance_submissions
- [ ] Add foreign keys + constraints
- [ ] Create `supabase.ts` config
- [ ] Add env keys
- [ ] Test connection
- [ ] Seed 2 sections

**Definition of Done:**

- Server logs Supabase data on startup

---

### DAY 3 — Sections API

**Objective:** Full CRUD for sections.

**Checklist:**

- [ ] Build controller
- [ ] Build routes
- [ ] Register router
- [ ] Test:
  - [ ] GET /api/sections
  - [ ] POST /api/sections
  - [ ] DELETE /api/sections/:id

**Definition of Done:**

- All endpoints return correct data

---

### DAY 4 — Services API

**Objective:** Manage services + active state.

**Checklist:**

- [ ] Build controller + routes
- [ ] Implement:
  - [ ] Only ONE active service
- [ ] Test:
  - [ ] GET all
  - [ ] GET by id
  - [ ] POST
  - [ ] PATCH activate

**Definition of Done:**

- Only one service active at any time

---

### DAY 5 — Attendance API

**Objective:** Submit + aggregate attendance.

**Checklist:**

- [ ] POST submission
- [ ] GET submissions
- [ ] GET totals
- [ ] Add validation middleware

**Definition of Done:**

- Totals endpoint aggregates correctly

---

### DAY 6 — Export & Settings API

**Objective:** CSV export works.

**Checklist:**

- [ ] Build CSV service
- [ ] Create export endpoint
- [ ] Create settings endpoints
- [ ] Test CSV download

**Definition of Done:**

- CSV downloads correctly

---

### DAY 7 — Review & Buffer

**Objective:** Stabilize backend.

**Checklist:**

- [ ] Test all routes
- [ ] Clean `.env`
- [ ] Remove hardcoding
- [ ] Fix weak points

**Definition of Done:**

- Full API works end-to-end

---

## ⬛ WEEK 2 — Real-Time Engine & Counter UI

### DAY 8 — Socket.io Setup

**Objective:** Real-time events working.

**Checklist:**

- [ ] Setup socket server
- [ ] Emit `attendance:updated`
- [ ] Test with browser

**Definition of Done:**

- Event logs on submission

---

### DAY 9 — Client Base & Routing

**Objective:** React app structure ready.

**Checklist:**

- [ ] Setup Tailwind
- [ ] Setup router
- [ ] Create pages
- [ ] Setup Axios
- [ ] Configure proxy

**Definition of Done:**

- Routes render without errors

---

### DAY 10 — Design System

**Objective:** UI foundation.

**Checklist:**

- [ ] Define colors
- [ ] Setup typography
- [ ] Build base components:
  - [ ] Button
  - [ ] Card
  - [ ] Input
  - [ ] Badge
- [ ] Create layout

**Definition of Done:**

- Components styled consistently

---

### DAY 11 — Counter UI

**Objective:** Build mobile form.

**Checklist:**

- [ ] Build layout
- [ ] Fetch sections + service
- [ ] Build inputs
- [ ] Mobile-first design

**Definition of Done:**

- Works on real phone

---

### DAY 12 — Submit Logic

**Objective:** Form works end-to-end.

**Checklist:**

- [ ] [ ] POST request
- [ ] [ ] Loading state
- [ ] [ ] Success state
- [ ] [ ] Error handling
- [ ] [ ] Reset logic

**Definition of Done:**

- Data appears in Supabase

---

### DAY 13 — Socket Hook

**Objective:** Client listens to updates.

**Checklist:**

- [ ] Build `useSocket`
- [ ] Add connection indicator
- [ ] Test event handling

**Definition of Done:**

- Event received in client

---

### DAY 14 — Review & Real Device Test

**Objective:** Validate real-world usage.

**Checklist:**

- [ ] Use local IP
- [ ] Test on phone
- [ ] Submit multiple entries

**Definition of Done:**

- Works over Wi-Fi with no issues

---

## ⬛ WEEK 3 — Admin Dashboard

### DAY 15 — Dashboard Layout

**Objective:** Admin shell + services.

**Checklist:**

- [ ] Build layout
- [ ] Service selector
- [ ] Create + activate services

**Definition of Done:**

- Services manageable

---

### DAY 16 — Section Manager

**Objective:** Manage sections.

**Checklist:**

- [ ] Add section
- [ ] Delete section
- [ ] Refresh UI

**Definition of Done:**

- Changes persist

---

### DAY 17 — Attendance Table

**Objective:** Show totals.

**Checklist:**

- [ ] Build table
- [ ] Fetch totals
- [ ] Handle empty state

**Definition of Done:**

- Data displays correctly

---

### DAY 18 — Live Updates

**Objective:** Real-time dashboard.

**Checklist:**

- [ ] Listen to socket
- [ ] Refetch data
- [ ] Add animations

**Definition of Done:**

- Updates within 2 seconds

---

### DAY 19 — Totals Card

**Objective:** Highlight key metrics.

**Checklist:**

- [ ] Build totals card
- [ ] Sync with data

**Definition of Done:**

- Displays correct totals

---

### DAY 20 — Historical View

**Objective:** View past services.

**Checklist:**

- [ ] List past services
- [ ] Load data on click

**Definition of Done:**

- Historical data accessible

---

### DAY 21 — Review

**Objective:** Full admin flow.

**Checklist:**

- [ ] Test all flows
- [ ] Fix issues

**Definition of Done:**

- No manual refresh needed

---

## ⬛ WEEK 4 — Polish & Launch

### DAY 22 — CSV Export UI

**Objective:** Download reports.

**Checklist:**

- [ ] Add export button
- [ ] Test CSV

**Definition of Done:**

- File downloads correctly

---

### DAY 23 — Counter UI Polish

**Objective:** Improve UX.

**Checklist:**

- [ ] Fix spacing
- [ ] Improve readability
- [ ] Style states

**Definition of Done:**

- Easy to use without guidance

---

### DAY 24 — Dashboard Polish

**Objective:** Professional UI.

**Checklist:**

- [ ] Improve layout
- [ ] Improve hierarchy

**Definition of Done:**

- Portfolio-ready UI

---

### DAY 25 — Responsiveness

**Objective:** Works on all screens.

**Checklist:**

- [ ] Test mobile + desktop
- [ ] Fix layout issues

**Definition of Done:**

- No layout breaks

---

### DAY 26 — Error Handling

**Objective:** Handle failures.

**Checklist:**

- [ ] Server errors
- [ ] Empty states
- [ ] Network issues

**Definition of Done:**

- No blank screens

---

### DAY 27 — Full Simulation

**Objective:** Real-world test.

**Checklist:**

- [ ] Simulate service
- [ ] Multiple devices
- [ ] Export CSV

**Definition of Done:**

- Everything works end-to-end

---

### DAY 28 — Bug Fixing

**Objective:** Stabilize product.

**Checklist:**

- [ ] Fix bugs from simulation
- [ ] Retest

**Definition of Done:**

- No critical issues

---

### DAY 29 — Documentation

**Objective:** Make it usable by others.

**Checklist:**

- [ ] Write README
- [ ] Setup guide
- [ ] Cleanup code

**Definition of Done:**

- Anyone can run it

---

### DAY 30 — Launch & Portfolio

**Objective:** Ship it.

**Checklist:**

- [ ] Final test
- [ ] Take screenshots
- [ ] Record demo
- [ ] Write case study
- [ ] Tag v1.0

**Definition of Done:**

- Ready for real-world use
