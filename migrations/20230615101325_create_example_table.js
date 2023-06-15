/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  await knex.schema.createTable("users", function (table) {
    table.increments("id").primary();
    table.string("first_name", 255).notNullable();
    table.string("last_name", 255).notNullable();
    table.string("email_address", 255).notNullable().unique();
  });

  await knex.schema.createTable("posts", function (table) {
    table.increments("id").primary();
    table.text("title", 255).notNullable();
    table.text("description").notNullable();
    table.integer("creator_id").unsigned();
    table
      .foreign("creator_id")
      .references("id")
      .inTable("users")
      .onDelete("SET NULL");
  });

  await knex.schema.createTable("comments", function (table) {
    table.increments("id").primary();
    table.integer("user_id").unsigned();
    table.integer("post_id").unsigned();
    table.text("text").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());

    table.foreign("user_id").references("users.id").onDelete("CASCADE");
    table.foreign("post_id").references("posts.id").onDelete("CASCADE");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("comments")
    .dropTableIfExists("posts")
    .dropTableIfExists("users");
};
