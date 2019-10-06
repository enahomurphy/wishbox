const {
  get,
  getAll,
  create,
  update,
  getRelation,
  remove,
} = require('../../controllers/user');

// const routes = [
//   {
//     path: '/me',
//     controller: [
//       get
//     ],
//     method: 'get'
//   }
// ];


module.exports = router => {
  router.get('/users', getAll)
    .get('/me', get)
    .get('/users/:id', get)
    .get('/users/:userId/wishes', getRelation)
    .post('/users', create)
    .patch('/users/:id', update)
    .delete('/users/:id', remove);
  return router;
};
