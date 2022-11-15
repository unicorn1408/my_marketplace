const argon2 = require('argon2');

const hashPassword = async (password) => {
  try {
    const hash = await argon2.hash(password, { type: argon2.argon2id });
    return hash;
  } catch (err) {
    return null;
  }
};

const hashVerify = async (hash, password) => {
  try {
    const result = await argon2.verify(hash, password);
    return result;
  } catch (err) {
    return null;
  }
};

module.exports = { hashPassword, hashVerify };
