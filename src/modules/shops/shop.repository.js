const { Shop } = require('./shop.model');

const ShopRepository = {

  async create(shopData, admin) {
    const newShop = await Shop.query().insertGraph({
      name: shopData.name,
      admin_user_id: admin.id,

    });

    return newShop;
  },
};

module.exports = { ShopRepository };
