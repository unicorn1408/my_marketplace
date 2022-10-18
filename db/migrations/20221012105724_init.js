/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  await knex.schema
    .createTable('users', (table) => {
      table.increments('id');
      table.string('first_name', 20).notNullable();
      table.string('last_name', 20).notNullable();
      table.string('email', 30).notNullable();
      table.string('password').notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  await knex.schema
    .dropTable('users');
};
