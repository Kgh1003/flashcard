# Flash Cards

A simple React flashcard app for studying core JavaScript concepts. Each card presents a question, lets you reveal the answer, and helps you move through a short study deck with a progress indicator.

## Features

- Review a small set of JavaScript flashcards
- Show or hide each answer with a single click
- Move to the previous or next card in the deck
- Track progress with a visual progress bar and card counter
- Built with React and Vite for a fast frontend experience

## Tech Stack

- React
- Vite
- JavaScript
- CSS

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open the local URL shown in the terminal (typically http://localhost:5173) in your browser.

## Project Structure

```text
flashcards/
├── src/
│   ├── App.jsx              # Main app logic and card navigation
│   ├── data.js              # Flashcard content
│   ├── components/
│   │   ├── Flashcard.jsx    # Card display and answer toggle
│   │   └── ProgressBar.jsx  # Progress indicator
│   ├── App.css              # App styling
│   ├── index.css            # Global styles
│   └── main.jsx             # App entry point
├── public/                  # Static assets
├── index.html               # HTML shell
├── package.json             # Scripts and dependencies
├── vite.config.js           # Vite configuration
└── README.md                # Project documentation
```

## Customizing the Deck

Edit the card data in `src/data.js` to add, remove, or change questions and answers.

Example:

```js
export const cards = [
  { question: 'What is JavaScript?', answer: 'JavaScript is a programming language used to build interactive web applications.' },
  { question: 'What is a function?', answer: 'A function is a reusable block of code that performs a specific task.' }
];
```

## Scripts

```bash
npm run dev    # start Vite dev server
npm run build  # create a production build
npm run lint   # run ESLint checks
npm run preview # preview production build locally
```

## License

This project is for educational and learning purposes.

## Project URL

https://roadmap.sh/projects/flash-cards