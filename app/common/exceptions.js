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
