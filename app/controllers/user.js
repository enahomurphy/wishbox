const Controller = require('.');
const Schema = require('../models/user');

class User extends Controller {
  constructor() {
    super(Schema, 'user', 'userId', 'wishId');
  }

  setUpdatable() {
    this.updatable = ['name', 'profileImage', 'street', 'city'];
    return this;
  }
}

module.exports = new User();
