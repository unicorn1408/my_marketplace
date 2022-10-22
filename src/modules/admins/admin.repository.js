const { Admin } = require('./admin.model');

const AdminRepository = {

  async create(adminData) {
    const newAdmin = await Admin.query().insert({
      email: adminData.email,
      password: adminData.password,
    });

    return newAdmin;
  },
};

module.exports = { AdminRepository };
