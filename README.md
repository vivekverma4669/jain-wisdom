# Jain Wisdom

A responsive client-presentation demo of the proposed Jain Wisdom website and mobile ecosystem. Built with Next.js App Router, TypeScript, Tailwind CSS and Lucide icons. No backend, accounts, payments, external APIs or environment variables.

## Run locally

```sh
npm install
npm run dev
```

Open http://localhost:3000.

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

## Structure

- `src/app/`: page composition, layout, responsive styles and favicon.
- `src/components/`: reusable navigation, product mockups and feature sections.
- `src/data/demo.ts`: sample collections, quiz questions and fictional businesses.

## Demo interactions

With the development server running, `node scripts/verify-demo.mjs` checks all four target widths and the main interactions, saving screenshots to `test-results/`. It uses installed Microsoft Edge on Windows; elsewhere run `npx playwright install chromium` first.

Search filters local collections. Navigation anchors, mobile dialog, language preview, saves, favorites, visual audio controls, learning previews, a five-question platform quiz, calendar month navigation, directory filters and volunteer form feedback work without a server. Share copies the wisdom section link when clipboard access is available.

No audio files play. Volunteer information is not transmitted or persisted. Mobile apps and membership plans are clearly labeled as proposed/coming soon. Calendar events, quotations, religious content previews, illustrative landscapes and fictional businesses are explicitly identified. The quiz uses platform-feature questions to avoid presenting unreviewed religious facts. The language selector demonstrates selection only; full translations are planned.

The supplied written brief is the source for product features; no separate concept/PPT asset was present in the repository. Detailed religious content requires editorial review before production.
