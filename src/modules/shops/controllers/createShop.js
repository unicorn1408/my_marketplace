const { ShopRepository } = require('../shop.repository');
const { UserRepository } = require('../../users/index');

const createShop = async (ctx) => {
  const newShopData = ctx.request.body;

  const admin = await UserRepository.findByEmail(newShopData.email);

  console.log(admin)
  const newShop = await ShopRepository.create(newShopData, admin);

  console.log(newShop)
  return newShop;
};

module.exports = { createShop };
