
# Minimalist Encryption Visualizer

A clean, minimalist, and interactive React demo visualizing data encryption. The mobile-first UI presents a single, beautifully simple credit card. On tapping a button, the card undergoes a sleek transformation into its "encrypted" state, accompanied by a subtle scanning animation.

This project is built with React, TypeScript, and Framer Motion, focusing on intentional negative space, a muted color palette, and fluid, meaningful interactions.

## ELI10 TLDR

Imagine you have one important card on a clean table. This app lets you tap a button to magically cover its numbers with secret stars, showing how your information is kept safe online. It's simple, clean, and interactive.

## Project Structure

```
.
├── Asset/
│   └── Font/
├── components/
│   ├── Core/
│   │   └── CreditCard.tsx
│   └── Section/
│       └── EncryptionVisualizer.tsx
├── styles/
│   ├── GlobalStyles.ts
│   └── theme.ts
├── App.tsx
├── bugReport.md
├── importmap.js
├── index.html
├── index.tsx
├── metadata.json
├── noteBook.md
└── README.md
```

### Key Components

-   **`EncryptionVisualizer.tsx`**: The main interactive stage. It holds the state for a single card and a button to trigger the encryption/decryption animation.
-   **`CreditCard.tsx`**: A minimalist component with two clean states: `default` and `encrypted`. It uses Framer Motion for smooth transitions.
-   **`theme.ts`**: Contains all design tokens for the minimalist and spacious visual theme.
