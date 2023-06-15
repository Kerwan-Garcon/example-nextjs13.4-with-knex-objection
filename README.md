## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## .ENV FILE

DB_CLIENT= [`pg || mysql ...`]
PG_URI= [`DB_CONNEXION_STRING`]

## Knex

Run the migrations to start with the right datas [`npx knex migrate:latest`] OR pass this step if you already have a database.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
