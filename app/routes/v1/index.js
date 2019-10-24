const { registerRoutes } = require('../helper');
const wish = require('./wish');
const user = require('./user');
const slot = require('./slot');
const auth = require('./auth');

module.exports = express => {
  const router = express.Router();
  wish(router);
  user(router);
  slot(router);
  registerRoutes(router, auth);

  return router;
};
