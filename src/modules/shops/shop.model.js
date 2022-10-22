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
        id: { type: 'integer' },
      },
    };
  }

  static relationMappings() {
    // eslint-disable-next-line global-require
    const { PhoneNumber } = require('../phone_numbers/phone_number.model');
    // eslint-disable-next-line global-require
    const { User } = require('../users/index');

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
        relation: Model.ManyToManyRelation,
        modelClass: User,
        join: {
          from: 'shops.id',
          through: {
            from: 'users_shops.shop_id',
            to: 'users_shops.user_id',
          },
          to: 'users.id',
        },
      },
    };
  }
}

module.exports = { Shop };
