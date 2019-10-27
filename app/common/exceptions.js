module.exports.NotFoudException = function NotFoudException(message) {
  this.message = message;
  this.code = 404;
  this.type = 'NotFound';
  this.name = 'NotFoudException';
};

module.exports.BadRequestException = function BadRequestException(message) {
  this.message = message;
  this.code = 400;
  this.type = 'BadRequest';
  this.name = 'BadRequestException';
};

module.exports.UnAutthorizedRequestException = function BadRequestException(message) {
  this.message = message;
  this.code = 401;
  this.type = 'UnAutthorizedRequest';
  this.name = 'UnAutthorizedRequestException';
};

module.exports.ForbiddenRequestException = function BadRequestException(message) {
  this.message = message;
  this.code = 403;
  this.type = 'ForbiddenRequest';
  this.name = 'ForbiddenRequestException';
};

