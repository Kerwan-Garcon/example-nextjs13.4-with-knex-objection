const { loadEnvConfig } = require("@next/env");
const { default: knex } = require("knex");
const { Model } = require("objection");

const dev = process.env.NODE_ENV !== "production";
const { DB_CLIENT, PG_URI } = loadEnvConfig("./", dev).combinedEnv;
console.log("DB_CLIENT", DB_CLIENT);
console.log("PG_URI", PG_URI);
const config = {
  client: DB_CLIENT,
  connection: PG_URI,
  migrations: {
    directory: "./src/lib/db/migrations",
  },
};

const knexInstance = knex(config);

module.exports = {
  knexInstance,
  config,
};

Model.knex(knexInstance);
