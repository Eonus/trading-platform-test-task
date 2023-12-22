const path = require("path")

const entitiesPath =
  process.env.NODE_ENV === "test"
    ? path.join(__dirname, "src/**", "{model,view-model,entity,view-entity}.ts")
    : path.join(__dirname, "dist/**", "{model,view-model,entity,view-entity}.js")

const subscribersPath =
  process.env.NODE_ENV === "test"
    ? path.join(__dirname, "src/**", "subscriber.ts")
    : path.join(__dirname, "dist/**", "subscriber.js")

const migrationsPath =
  process.env.NODE_ENV === "test"
    ? path.join(__dirname, "src/migrations/**/*.ts")
    : path.join(__dirname, "dist/migrations/**/*.js")

module.exports = {
  type: "postgres",
  url: process.env.DB_STRING,
  synchronize: false,
  migrationsRun: false,
  entities: [entitiesPath],
  migrations: [migrationsPath],
  subscribers: [subscribersPath],
  cli: {
    entitiesDir: ["src/**/model.ts"],
    migrationsDir: "src/migrations",
  },
}
