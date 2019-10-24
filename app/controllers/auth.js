const User = require('../models/user');
const jwt = require('../common/jwt');
const exceptions = require('../common/exceptions');

class Auth {
  async login(req, res) {
    const { email, password } = req.body;
    const user = await User
      .findOne({ email })
      .select('name email username');

    if (!user) {
      throw (new exceptions.BadRequestException('invalid user or password'));
    }

    if (user.validPassword(password)) {
      res.status(200).json({ token: jwt.generateToken(user) });
    }

    return res.status(404).send();
  }
}

module.exports = new Auth();
