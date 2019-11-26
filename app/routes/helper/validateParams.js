const { IsValidId, ParamsValidation } = require('../../middleware');

module.exports = (router, params = []) => {
  params.forEach(({ param, model }) => {
    router.param(
      param,
      IsValidId([param]),
      ParamsValidation(param, model),
    );
  });
};
