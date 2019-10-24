const {
  get,
  getAll,
  create,
  update,
} = require('../../controllers/wish');

module.exports = router => {
  router.get('/wishes', getAll)
    .post('/wishes', create)
    .get('/wishes/:wishId', get)
    .patch('/wishes/:wishId', update)
    .delete('/wishes/:wishId', update);

  return router;
};
