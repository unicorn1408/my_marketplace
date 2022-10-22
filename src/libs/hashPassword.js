const argon2 = require('argon2');

const hashPassword = async (password) => {
  try {
    const hash = await argon2.hash(password, { type: argon2.argon2id });
    return hash;
  } catch (err) {
    console.log(err);
  }
};

module.exports = { hashPassword };
