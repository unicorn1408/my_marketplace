const argon2 = require('argon2');

const hashPassword = async (password) => {
  try {
    const hash = await argon2.hash(password, { type: argon2.argon2id });
    return hash;
  } catch (err) {
    return err;
  }
};

const hashVerify = async (hash, password) => {
  try {
    if (await argon2.verify(hash, password)) {
      return true;
    }
    return false;
  } catch (err) {
    return err;
  }
};

module.exports = { hashPassword, hashVerify };
