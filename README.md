# Villes de France

A geography game: find French cities on a map.

Pick a difficulty level, then locate ten cities by clicking on the map: the closer you get, the more points you score. The smaller the city, the harder it is.

## Table of contents

- [Villes de France](#villes-de-france)
	- [Table of contents](#table-of-contents)
	- [How it works](#how-it-works)
	- [Tech stack](#tech-stack)
	- [Repository structure](#repository-structure)
	- [Prerequisites](#prerequisites)
	- [Installation](#installation)
	- [Configuration](#configuration)
	- [Running locally](#running-locally)
	- [Useful scripts](#useful-scripts)
	- [Tests and quality](#tests-and-quality)
	- [License](#license)

## How it works

1. **Level selection**: the home page offers seven levels. The level sets the population range of the cities you will get.
2. **Game creation**: a game is made of 10 rounds. The cities are fetched from the French Geo API, filtered by population and shuffled.
3. **Guess**: each round shows the name of a city. Click on the map where you think it is.
4. **Scoring**: the distance, in kilometers, is measured between your click and the closest point of the city border. A round is worth up to 90 points, and the score decreases exponentially with the distance.
5. **Reveal**: the city border is fetched and drawn on the map, along with your guess and the distance.
6. **End of game**: after the last round, a dialog shows your total score.

| Level | Name | Population |
| --- | --- | --- |
| 1 | Débutant | 100,000 and more |
| 2 | Intermédiaire | 60,000 – 99,999 |
| 3 | Avancé | 45,000 – 59,999 |
| 4 | Expert | 35,000 – 44,999 |
| 5 | Maître | 28,000 – 34,999 |
| 6 | Légendaire | 23,000 – 27,999 |
| 7 | Ultime | 20,000 – 22,999 |

The score of a round is `90` when the guess is inside the city, `floor(90 · e^(−0.01 · d))` when the distance `d` is up to 500 km, and `0` beyond.

Each level also has a training mode, available from the level selector. The interface is in French, the light and dark themes are both supported, and the layout is responsive.

## Tech stack

| Layer | Technologies |
| --- | --- |
| Frontend | React 18, Next.js 14 (App Router), Tailwind CSS, shadcn/ui, Radix UI, `class-variance-authority`, Lucide |
| Map | MapLibre GL, `react-map-gl` |
| Data | TanStack Query, Zod, `nuqs`, Zustand |
| Data source | [Geo API](https://geo.api.gouv.fr/) (French government, `communes` endpoint) |
| Tooling | pnpm, TypeScript, Vitest, ESLint, `@t3-oss/env-nextjs` |

## Repository structure

```
.
├── public/
│   ├── levels/                 Level illustrations
│   └── map-style*.json         MapLibre styles (light and dark)
├── src/
│   ├── app/                    Routes: home, level/[level], training/[level]
│   ├── env.ts                  Environment variable validation
│   └── lib/
│       ├── actions/            Calls to the Geo API
│       ├── components/         atoms, molecules, organisms and shadcn/ui primitives
│       ├── providers/          Theme and TanStack Query providers
│       ├── styles/             Global CSS
│       ├── types/              Shared types and Zod schemas
│       └── utils/              Game, level, geojson, random, API and time helpers
```

Components follow an atomic design: each one lives in its own folder, with a `.tsx` file, a `.type.ts` file and an `index.ts`. Utilities follow the same pattern, with tests next to the code.

## Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- [pnpm](https://pnpm.io/) 8 or later (`npm install -g pnpm`)

## Installation

```bash
git clone git@github.com:maxencebonamy/Villes-de-France.git
cd Villes-de-France
pnpm install
```

## Configuration

Copy the example file and fill in the values.

```bash
cp .env.example .env
```

| Variable | Description | Example |
| --- | --- | --- |
| `NEXT_PUBLIC_CITIES_API` | Base URL of the cities API | `https://geo.api.gouv.fr` |

Variables are validated at startup in [`src/env.ts`](src/env.ts).

## Running locally

```bash
pnpm dev
```

- Application: <http://localhost:3000>

To test a production build:

```bash
pnpm build
pnpm start
```

## Useful scripts

| Command | Effect |
| --- | --- |
| `pnpm dev` | Start the development server |
| `pnpm build` | Create a production build |
| `pnpm start` | Serve the production build |
| `pnpm lint` | Lint the repository |
| `pnpm lint:fix` | Lint the repository with auto-fix |
| `pnpm test` | Run the tests in watch mode |
| `pnpm coverage` | Run the tests with coverage |

## Tests and quality

```bash
pnpm test run
pnpm lint
```

Tests use Vitest and cover the game, level, geojson and random utilities.

## License

This project is licensed under the [MIT License](LICENSE).
