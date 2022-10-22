/* eslint-disable no-param-reassign */
const { Model } = require('objection');
const { hashPassword } = require('../../libs/hashPassword');

class Admin extends Model {
  static get tableName() {
    return 'admins';
  }

  static async beforeInsert({ inputItems }) {
    const adminPassword = inputItems[0].password;
    const hashedPassword = await hashPassword(adminPassword);
    inputItems[0].password = hashedPassword;
  }

  static async afterInsert({ inputItems }) {
    delete inputItems[0].password;
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['email', 'password'],

      properties: {
        email: { type: 'string', minLength: 5, maxLength: 20 },
        password: { type: 'string', minLength: 1, maxLength: 20 },
      },
    };
  }
}

module.exports = { Admin };
