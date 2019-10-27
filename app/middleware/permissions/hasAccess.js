
const wrap = require('../asynWrapper');
const {
  ForbiddenRequestException
} = require('../../common/exceptions');

const hasAccess = (role) => {
  return wrap((req, res, next) => {
    if (req.user.role !== role) {
      throw(
        new ForbiddenRequestException(
        'you don\'t have access to perform this action'
        )
      );
    }
    
    next();
  });
}

module.exports = hasAccess;
