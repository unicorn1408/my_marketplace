const { Model } = require('objection');

class PhoneNumberModel extends Model {
  static get tableName() {
    return 'phone_numbers';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['number'],

      properties: {
        number: { type: 'string', minLength: 1, maxLength: 20 },
        type: { type: 'string', minLength: 1, maxLength: 20 },
      },
    };
  }
}
module.exports = { PhoneNumberModel };
