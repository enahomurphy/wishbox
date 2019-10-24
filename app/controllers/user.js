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

  me(req, res) {
    return res.status(200).send(req.headers.authorization);
  }
}

module.exports = new User();
