const { Shop } = require('./shop.model');

const ShopRepository = {

  async create(shopData, admin) {
    const newShop = await Shop.query().insertGraph({
      name: shopData.name,
      phone_number: [
        {
          number: shopData.number,
          type: 'shop',
        },
      ],
    });

    await Shop.relatedQuery('admins')
      .for(newShop.id)
      .relate(admin.id);

    return newShop;
  },
};

module.exports = { ShopRepository };
