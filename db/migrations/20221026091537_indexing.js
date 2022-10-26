/* eslint-disable indent */
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
   await knex
   .table('users', (table) => {
      table.index(['email'], 'idx_email');
      table.index(['phone_number_id'], 'idx_phone_number');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
   await knex
   .table('users', (table) => {
      table.dropIndex(['email'], 'idx_email');
      table.dropIndex(['phone_number_id'], 'idx_phone_number');
    });
};
