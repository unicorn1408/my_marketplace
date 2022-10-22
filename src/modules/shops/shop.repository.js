const { Shop } = require('./shop.model');

const ShopRepository = {

  async create(shopData) {
    const newShop = await Shop.query().insertGraph({
      name: shopData.name,
      phone_number: [
        {
          number: shopData.number,
        },
      ],
      admins: [
        {
          email: shopData.email,
          password: shopData.password,
        },
      ],
    });

    return newShop;
  },
};

module.exports = { ShopRepository };
