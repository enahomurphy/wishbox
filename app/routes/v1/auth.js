const { check } = require('express-validator');

const { login } = require('../../controllers/auth');
const { BadRequestHandler, AsyncWrapper } = require('../../middleware');

const routes = [
  {
    path: '/login',
    controller: [
      check('email').isEmail(),
      check('password').isLength({ min: 5 }),
      BadRequestHandler,
      AsyncWrapper(login),
    ],
    method: 'post',
  },
];

module.exports = routes;
