const { Model } = require('objection');
const { hashPassword } = require('../../libs/hashPassword');

class UserModel extends Model {
  static get tableName() {
    return 'users';
  }

  static async beforeInsert({ inputItems }) {
    const userPassword = inputItems[0].password;
    const hashedPassword = await hashPassword(userPassword);
    // eslint-disable-next-line no-param-reassign
    inputItems[0].password = hashedPassword;
  }

  static async afterInsert({ inputItems }) {
    // eslint-disable-next-line no-param-reassign
    delete inputItems[0].password;
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['first_name', 'last_name', 'email', 'password'],

      properties: {
        id: { type: 'integer' },
        first_name: { type: 'string', minLength: 1, maxLength: 20 },
        last_name: { type: 'string', minLength: 1, maxLength: 20 },
        email: { type: 'string', minLength: 5, maxLength: 30 },
        password: { type: 'string', minLength: 1, maxLength: 100 },
      },
    };
  }

  static relationMappings() {
    // eslint-disable-next-line global-require
    const { PhoneNumberModel } = require('../phone_numbers/phone_number.model');
    // eslint-disable-next-line global-require
    const { ShopModel } = require('../shops/index');

    return {
      phone_number: {
        relation: Model.BelongsToOneRelation,
        modelClass: PhoneNumberModel,
        join: {
          from: 'users.phone_number_id',
          to: 'phone_numbers.id',
        },
      },
      shops: {
        relation: Model.ManyToManyRelation,
        modelClass: ShopModel,
        join: {
          from: 'users.id',
          through: {
            from: 'users_shops.user_id',
            to: 'users_shops.shop_id',
          },
          to: 'shops.id',
        },
      },
    };
  }
}

module.exports = { UserModel };
