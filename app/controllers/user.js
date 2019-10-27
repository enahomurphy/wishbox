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

  async me(req, res) {
    res.status(200).json(req.user);
  }
}

module.exports = new User();
