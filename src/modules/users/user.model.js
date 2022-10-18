const { Model } = require('objection');

class User extends Model {
  static get tableName() {
    return 'users';
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
  // just saved for later
  // static relationMappings() {
  //   const Example = require('./example')
  //   return {
  //    example: {
  //      relation: Model.BelongsToOneRelation,
  //      modelClass: Example,
  //      join: {
  //       from: 'examples.example_id',
  //       to: 'user.id',
  //      }
  //    }
  //   }
  // }
}

module.exports = { User };
