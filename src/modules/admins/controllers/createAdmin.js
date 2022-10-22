const { AdminRepository } = require('../admin.repository');

const createAdmin = async (ctx) => {
  const newAdminData = ctx.request.body;

  const newAdmin = await AdminRepository.create(newAdminData);

  return newAdmin;
};

module.exports = { createAdmin };
