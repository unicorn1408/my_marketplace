const { ShopRepository } = require('../shop.repository');

const createShop = async (ctx) => {
  const newShopData = ctx.request.body;

  const newShop = ShopRepository.create(newShopData);

  return newShop;
};

module.exports = { createShop };
