const wish = require('./wish');
const user = require('./user');
const slot = require('./slot');

module.exports = express => {
  const router = express.Router();
  wish(router);
  user(router);
  slot(router);
  return router;
};
