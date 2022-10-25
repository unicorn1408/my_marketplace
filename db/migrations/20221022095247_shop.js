/* eslint-disable semi */
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  await knex.schema
    .createTable('shops', (table) => {
      table.increments('id').primary();
      table.string('name', 20).notNullable();
      table.integer('phone_number_id', 4).notNullable();
      table.timestamp('expirationDate');
    });
  await knex.schema
    .createTable('users_shops', (table) => {
      table.integer('user_id', 4).notNullable();
      table.integer('shop_id', 4).notNullable();
      table.enu('user_role', ['admin', 'editor']);
    });
}
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  await knex.schema
    .dropTable('shops');
};
