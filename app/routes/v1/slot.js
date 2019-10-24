const {
  get,
  getAll,
  create,
  update,
} = require('../../controllers/slot');

module.exports = router => {
  router.get('/slots', getAll)
    .get('/slots/:id', get)
    .post('/slots', create)
    .patch('/slots/:id', update);

  return router;
};
