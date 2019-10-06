const {
  get,
  getAll,
  create,
  update,
} = require('../../controllers/wish');

module.exports = router => {
  router.get('/whishes', getAll)
    .post('/wishes', create)
    .get('/wishes/:id', get)
    .patch('/wishes/:id', update)
    .delete('/wishes/:id', update);

  return router;
};
