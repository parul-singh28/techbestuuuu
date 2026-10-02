# TechBestuuuu ❄️⚡

> **90-Day Winter Arc Challenge Dashboard** — Single-page dashboard application built with React, Tailwind CSS, and Lucide Icons. Designed with an ultra-clean developer aesthetic in Dark Navy & Light Ice Blue themes.

---

## 🚀 Live Dashboard
Running locally at: **[http://localhost:5173/](http://localhost:5173/)**

---

## 🏛️ System Architecture

### 1. State Management & Robust Persistence
- Built with React `useState` and persistent synchronization via `useEffect` to browser `localStorage`.
- Stores completion states, notes, ratings, and custom tasks across **all 90 days**.
- If a user opens the page tomorrow, their checked tasks, notes, and metrics remain saved exactly as left.

### 2. Design & Aesthetics
- **Light Mode**: Crisp White (`#FFFFFF`) and Soft Ice Blue backgrounds (`#F0F8FF` to `#E6F2FF`) with Navy Blue text accents.
- **Dark Mode**: Rich Navy Blue (`#0A192F`) canvas with deep slate panels and clean Slate/Cyan highlights.
- **Theme Toggle**: Smooth dark/light mode toggle switch fixed in the header.

### 3. Layout Structure
- **Header**:
  - Branding: **TechBestuuuu**
  - Current Day prominent badge (`DAY 14 OF 90 • 14d Streak`)
  - Smooth Dark / Light mode toggle switch
  - Reset to default button
- **Left Sidebar / Hero Element**:
  - User Profile Card: **Parul Singh | Frontend & Full-Stack Developer**
  - Master Circular 90-Day Progress Bar (`15.6%`, `14 / 90 crushed`)
  - Active Streak metrics
  - Category breakdown mini progress wheels/bars:
    * 💆‍♂️ Skincare Routine %
    * 💻 Tech & Engineering %
    * 📚 Skills & Growth %
    * 🎯 Core Daily Goals %
  - Challenge Phases roadmap (Phase 1, Phase 2, Phase 3)
- **Center Main Panel (Active Day Workspace)**:
  - Day Stepper (Previous Day, Next Day, Jump to Today)
  - Collapsible 90-Day Visual Timeline Matrix (click any day to load its tasks)
  - Categorized checklists for:
    * 💆‍♂️ **Skincare Routine** (Hydration 3.5L, AM routine, PM routine, SPF 50 shield)
    * 💻 **Tech & Engineering** (LeetCode, Git commits, architecture deep work)
    * 📚 **Skills & Growth** (System Design reading, PWA building, speech clarity)
    * 🎯 **Core Daily Goals** (1h Workout, Clean nutrition, 7.5h sleep)
  - Custom task creation & deletion
  - Day Reflection Logbook (auto-saved to localStorage)
  - Confetti celebration upon completing all daily habits
- **Bottom Layout (Green Dot Contribution Matrices)**:
  - **GitHub Activity Grid**:
    * Target Username: `parul-singh28`
    * Complete 53-week contribution calendar grid mimicking classic GitHub green dot wall
    * Seeded dynamically with realistic green hue spectrum (`#216e39` down to `#9be9a8`)
    * Interactive "Log Commit (+1)" button to simulate commits live
    * Direct hyperlink to: `https://github.com/parul-singh28`
  - **LeetCode Progress Matrix**:
    * Target Username: `Parul-Singh`
    * LeetCode daily submission heat map simulator
    * Difficulty metric chips (Easy, Medium, Hard solved distribution, acceptance rate, ranking)
    * Interactive "Solve Problem (+1)" button
    * Direct hyperlink to: `https://leetcode.com/u/Parul-Singh/`

---

## 🛠️ Tech Stack
- **Framework**: React 19 + Vite 6
- **Styling**: Tailwind CSS v4 + Custom Theme CSS variables
- **Icons**: Lucide React
- **Celebration Effects**: Canvas Confetti
- **Storage**: Browser LocalStorage

---

## 🏃‍♂️ Running Locally
```bash
# Navigate to project
cd C:\Users\Parul\.gemini\antigravity\scratch\techbestuuuu

# Install dependencies (already installed)
npm install

# Start development server
npm run dev -- --port 5173 --host
```
Open [http://localhost:5173/](http://localhost:5173/) in your browser.
