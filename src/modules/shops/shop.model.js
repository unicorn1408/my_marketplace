/* eslint-disable global-require */
const { Model } = require('objection');

class Shop extends Model {
  static get tableName() {
    return 'shops';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name'],

      properties: {
        name: { type: 'string', minLength: 1, maxLength: 20 },
      },
    };
  }

  static relationMappings() {
    const { PhoneNumber } = require('../phone_numbers/phone_number.model');
    const { Admin } = require('../admins/admin.model');

    return {
      phone_number: {
        relation: Model.BelongsToOneRelation,
        modelClass: PhoneNumber,
        join: {
          from: 'shops.phone_number_id',
          to: 'phone_numbers.id',
        },
      },

      admins: {
        relation: Model.HasManyRelation,
        modelClass: Admin,
        join: {
          from: 'shops.id',
          to: 'admins.shop_id',
        },
      },
    };
  }
}

module.exports = { Shop };
