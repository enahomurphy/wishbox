const Controller = require('.');
const Schema = require('../models/user');

/**
 * @class
 */
class User extends Controller {
  /**
   * @constructor
   */
  constructor() {
    super(Schema, 'user', 'wishId');
  }

  /**
   * @param {Array} array
   * @return {Object} returns this
   */
  setUpdatable() {
    this.updatable = ['name', 'profileImage', 'street', 'city'];
    return this;
  }
}

module.exports = new User();
