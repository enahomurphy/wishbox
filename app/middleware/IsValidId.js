const mongoose = require('mongoose');

module.exports = (req, res, next) => {
  const ids = ['slotId', 'wishId', 'userId'];
  const { params } = req;

  const hasValidIds = ids.every(value => {
    if (params[value]) {
      return mongoose.Types.ObjectId.isValid(params[value]);
    }

    return true;
  });

  if (!hasValidIds) {
    return {};
  }

  return next();
};
