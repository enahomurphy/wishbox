module.exports = (err, req, res, next) => {
  if (err) {
    res.status(err.code).json(err);
  }

  next();
};
