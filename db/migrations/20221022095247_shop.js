/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  await knex.schema
    .createTable('shops', (table) => {
      table.increments('id');
      table.string('name', 20).notNullable();
      table.string('expiratioDate', 20);
      table.integer('phone_number_id', 4).notNullable();
    });
  await knex.schema
    .createTable('admins', (table) => {
      table.increments('id');
      table.string('email', 20).notNullable();
      table.string('password', 100).notNullable();
      table.integer('shop_id', 4);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  await knex.schema
    .dropTable('shops')
    .dropTable('admins');
};
