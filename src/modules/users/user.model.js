const { Model } = require('objection');
const {hashPassword} = require('../../libs/hashPassword')

class User extends Model {
  static get tableName() {
    return 'users';
  }

  static async beforeInsert({ inputItems }) {
    const userPassword = inputItems[0].password;
    const hashedPassword = await hashPassword(userPassword);    
    inputItems[0].password = hashedPassword;
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['first_name', 'last_name', 'email', 'password'],

      properties: {
        first_name: { type: 'string', minLength: 1, maxLength: 20 },
        last_name: { type: 'string', minLength: 1, maxLength: 20 },
        email: { type: 'string', minLength: 5, maxLength: 30 },
        password: { type: 'string', minLength: 1, maxLength: 20 },
      },
    };
  }

  static relationMappings() {
    const { PhoneNumber } = require('../phone_numbers/phone_number.model');

    return {
      phone_number: {
        relation: Model.BelongsToOneRelation,
        modelClass: PhoneNumber,
        join: {
          from: 'users.phone_number_id',
          to: 'phone_numbers.id',
        },
      },
    };
  }
}

module.exports = { User };
