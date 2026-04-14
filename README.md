# Church Attendance Counter System

A local-network web application that allows churches to count and track service attendance in real time. Multiple counters use their personal devices to submit attendance data during a service. A central dashboard on the admin laptop receives and displays the data live, broken down by section and demographic.

---

## Table of Contents

- [Overview](#overview)
- [How It Works](#how-it-works)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [System Architecture](#system-architecture)
- [Database Schema](#database-schema)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Local Network Setup](#local-network-setup)
- [Usage Guide](#usage-guide)
- [CSV Export](#csv-export)
- [Contributing](#contributing)

---

## Overview

The Church Attendance Counter System is built to solve a simple but important problem: counting church attendance accurately, in real time, across multiple sections of a building — without paper, without delay, and without confusion.

An admin starts a service session on a central laptop. Counters walk into the congregation with their phones, count the members in their assigned section, and submit the numbers through their browser. The admin dashboard updates instantly and shows a full breakdown of the service attendance.

---

## How It Works

```bash
[Admin Laptop]
  └── Runs the server on the local church Wi-Fi
  └── Opens the dashboard in a browser
  └── Starts a service session

[Counter Devices — phones or tablets on the same Wi-Fi]
  └── Open the browser and go to the admin laptop's local IP address
  └── See the counter form
  └── Select their section and enter Men, Women, Children counts
  └── Submit the form

[Server — running on the admin laptop]
  └── Receives the submission
  └── Saves it to the database
  └── Instantly notifies the dashboard via WebSocket

[Admin Dashboard]
  └── Updates live with new totals
  └── Shows breakdown by section and demographic
  └── Allows CSV export at any time
```

No internet required. Everything runs on the local church Wi-Fi.

---

## Features

### MVP (Version 1)

- Admin can create and activate a service session
- Admin can configure church sections (e.g. Main Hall, Balcony, Children's Wing)
- Counters connect via local network and submit attendance on their devices
- Dashboard updates in real time via WebSockets
- Attendance broken down by section with Men, Women, and Children counts
- Total attendance calculated automatically
- Export full service attendance report as CSV
- Mobile-friendly counter interface
- Support for multiple services per day (configurable by admin)
- Historical records — view past service data

### Planned (Version 2)

- Cloud hosting — accessible from anywhere, not just local network
- Multi-church support — each church has its own account and data
- Admin authentication — secure login per church
- Edit and delete submissions
- Advanced reporting and analytics
- Export by date range
- Role-based access — admin vs counter permissions

---

## Tech Stack

| Layer | Technology |
| ------- | ------------ |
| Frontend | React, TypeScript, Vite |
| Backend | Node.js, Express.js |
| Database | Supabase (PostgreSQL) |
| Real-time | Socket.io (WebSockets) |
| Styling | TailwindCSS |
| Export | csv-stringify |
| Network | Local Wi-Fi (LAN) |

---

## System Architecture

The app is split into two parts that live inside one project folder.

**Server** — the backend. Handles all logic, data storage, and real-time communication. Runs on the admin laptop.

**Client** — the frontend. A React app served by the backend. Both the counter form and the admin dashboard are part of this.

When a counter submits attendance, the request goes to the server, gets saved in the database, and the server immediately pushes an update to the admin dashboard — all within the same local network.

---

## Database Schema

The database has three main tables.

### `services`

Represents a single church service session (e.g. First Service on Sunday 23 March).

| Column | Type | Description |
| --------- | ------ | ------------- |
| id | uuid | Unique identifier |
| name | text | Service name e.g. "First Service" |
| date | date | Date of the service |
| is_active | boolean | Whether this service is currently running |
| created_at | timestamp | When the session was created |

### `sections`

Represents the physical sections of the church that counters are assigned to.

| Column | Type | Description |
| -------- | ------ | ------------- |
| id | uuid | Unique identifier |
| name | text | Section name e.g. "Main Hall" |
| order | integer | Display order on dashboard |
| created_at | timestamp | When the section was created |

### `attendance_submissions`

Each row is one counter's submission for a specific section in a specific service.

| Column | Type | Description |
| --------- | ------ | ------------- |
| id | uuid | Unique identifier |
| service_id | uuid | Links to the services table |
| section_id | uuid | Links to the sections table |
| men | integer | Number of men counted |
| women | integer | Number of women counted |
| children | integer | Number of children counted |
| device_label | text | Optional label e.g. "Counter 1" |
| submitted_at | timestamp | When the submission was made |

---

## API Endpoints

### Services

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| GET | /api/services | Get all services |
| POST | /api/services | Create a new service |
| PATCH | /api/services/:id/activate | Set a service as active |
| GET | /api/services/:id | Get a single service |

### Sections

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| GET | /api/sections | Get all sections |
| POST | /api/sections | Create a new section |
| DELETE | /api/sections/:id | Delete a section |

### Attendance

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| POST | /api/attendance | Submit attendance (used by counters) |
| GET | /api/attendance/:serviceId | Get all submissions for a service |
| GET | /api/attendance/:serviceId/totals | Get aggregated totals by section |

### Export

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| GET | /api/export/:serviceId | Download CSV report for a service |

### Settings

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| GET | /api/settings | Get admin settings |
| PATCH | /api/settings | Update admin settings |

---

## Project Structure

```bash
church-counter/
├── server/
│   ├── src/
│   │   ├── config/
│   │   │   └── supabase.ts          # Database connection setup
│   │   ├── controllers/
│   │   │   ├── attendance.controller.ts
│   │   │   ├── service.controller.ts
│   │   │   └── section.controller.ts
│   │   ├── routes/
│   │   │   ├── attendance.routes.ts
│   │   │   ├── service.routes.ts
│   │   │   └── section.routes.ts
│   │   ├── sockets/
│   │   │   └── attendance.socket.ts # Real-time WebSocket logic
│   │   ├── services/
│   │   │   ├── attendance.service.ts
│   │   │   └── export.service.ts    # CSV generation
│   │   ├── middleware/
│   │   │   └── validate.ts
│   │   └── index.ts                 # App entry point
│   ├── .env                         # Environment variables (never commit this)
│   ├── package.json
│   └── tsconfig.json
│
└── client/
    ├── src/
    │   ├── pages/
    │   │   ├── CounterPage.tsx       # Counter submission form
    │   │   └── DashboardPage.tsx     # Admin live dashboard
    │   ├── components/
    │   │   ├── SectionForm.tsx
    │   │   ├── AttendanceTable.tsx
    │   │   ├── TotalsCard.tsx
    │   │   └── ServiceSelector.tsx
    │   ├── hooks/
    │   │   └── useSocket.ts          # WebSocket connection hook
    │   ├── lib/
    │   │   └── api.ts                # API request helper
    │   └── main.tsx
    ├── vite.config.ts
    └── package.json
```

---

## Getting Started

### Prerequisites

Make sure you have the following installed on the admin laptop before running the project.

- Node.js (version 18 or higher)
- npm (comes with Node.js)
- A Supabase account and project (free tier is fine)
- VS Code (recommended)

### Installation

1. Clone or download this project onto the admin laptop.

2. Navigate into the server folder and install dependencies.

3. Create a `.env` file inside the server folder and add your Supabase credentials.

   ```bash
   SUPABASE_URL=your_supabase_project_url
   SUPABASE_ANON_KEY=your_supabase_anon_key
   PORT=3000
   ```

4. Run the database setup script to create the required tables in Supabase.

5. Start the server. It will run on port 3000.

6. Navigate into the client folder, install dependencies, and build the frontend.

7. The server will serve the frontend automatically. Open `localhost:3000` in the browser.

---

## Local Network Setup

This app is designed to run on a local Wi-Fi network. No internet connection is required during a service.

**Step 1** — Connect the admin laptop to the church Wi-Fi.

**Step 2** — Find the laptop's local IP address.

- On Windows: open Command Prompt and type `ipconfig`. Look for IPv4 Address.
- On Mac: open Terminal and type `ifconfig`. Look for `inet` under `en0`.
- It will look something like `192.168.1.45`.

**Step 3** — Start the server on the admin laptop.

**Step 4** — On counter devices, open a browser and go to `http://[laptop-IP]:3000`.

- Example: `http://192.168.1.45:3000`

**Step 5** — Counters will see the counter form. Admin keeps the dashboard open on the laptop.

> Make sure all devices are connected to the same Wi-Fi network. The app will not work across different networks.

---

## Usage Guide

### For the Admin

1. Open the app on the laptop at `localhost:3000`.
2. Go to the Admin Dashboard.
3. Create the sections for your church if not already set up (e.g. Main Hall, Balcony).
4. Create a new service session and activate it.
5. Share the laptop's local IP address with the counters.
6. Watch the dashboard update as submissions come in.
7. Export the CSV when the service is done.

### For Counters

1. Connect your phone or tablet to the church Wi-Fi.
2. Open your browser and go to the IP address shared by the admin.
3. Select your assigned section from the dropdown.
4. Enter the number of Men, Women, and Children you counted.
5. Tap Submit.
6. You'll see a confirmation that your data was received.

---

## CSV Export

The admin can export a full attendance report for any service as a CSV file.

The exported file includes the following columns:

| Section | Men | Women | Children | Total | Submitted At |
|---------|-----|-------|----------|-------|--------------|

The file is named automatically based on the service name and date.

---

## Contributing

This project is currently in active development. Contributions, suggestions, and feedback are welcome once the MVP is complete.

---

*Built with care for the local church. Designed to be simple, reliable, and useful every Sunday.*
