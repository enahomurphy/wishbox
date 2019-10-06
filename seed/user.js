const faker = require('faker');

const User = require('../app/models/user');
const Seed = require('.');

/**
 * @class
 */
class UserSeed extends Seed {
  /**
   * @constructor
   * @param {Object} schema object
   */
  constructor() {
    super(User);
  }

  /**
   * generates demo data for collection
   * @return {void}
   */
  generate() {
    return {
      name: faker.name.findName().toLowerCase(),
      username: faker.internet.userName().toLowerCase(),
      email: faker.internet.email().toLowerCase(),
      phone: faker.phone.phoneNumber(),
      profileImage: faker.image.avatar(),
      street: faker.address.streetAddress(),
    };
  }
}

module.exports = UserSeed;
