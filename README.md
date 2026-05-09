# 🎬 CineReview – Movie Review Portal

A React web application where users can post and browse movie reviews in real time.

## Features

- **ReviewForm Component**: Controlled form with inline validation for:
  - Reviewer Name
  - Movie Title
  - Genre (dropdown with 10 options)
  - Rating (1–10 with live star preview)
  - Review Text (minimum 20 characters enforced)

- **ReviewGrid Component**: Displays submitted reviews as cards with:
  - Movie title and genre badge
  - Animated score circle (color-coded: green / amber / red)
  - Star rating display
  - Quoted review text
  - Reviewer name and timestamp

- **State Management**: Centralized in the App component; new reviews are prepended to the top
- **Field-level Validation**: Per-field error messages with red highlight; no generic alerts
- **Dark Cinematic Theme**: Film-grain overlay header, deep dark palette, red accent, gold stars
- **Responsive Layout**: Side-by-side on desktop, stacked on tablet/mobile

## Project Structure

```
src/
├── components/
│   ├── ReviewForm.jsx   # Controlled form with validation
│   └── ReviewGrid.jsx   # Card grid for submitted reviews
├── App.jsx              # Root component, manages reviews state
├── App.css              # Full dark-theme stylesheet
└── main.jsx             # React entry point
```

## How It Works

1. User fills in the ReviewForm; errors show per field on submit attempt
2. Valid review is passed up via `onSubmitReview` prop callback
3. App prepends the new review to the `reviews` array state
4. ReviewGrid re-renders with the updated list
5. Form resets to empty after successful submission

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

## Tech Stack

- **React 19** — functional components, hooks
- **Vite 8** — lightning-fast dev server
- **CSS custom properties** — dark-mode design tokens
- **No external UI library** — all styling from scratch

## Key React Concepts Demonstrated

- `useState` for form state and reviews array
- Controlled inputs with `onChange` handlers
- Lifting state up: ReviewForm → App → ReviewGrid
- Conditional rendering (empty state vs. grid)
- Component composition with props
- Per-field validation without third-party libraries
