const {
  get,
  getAll,
  create,
  update,
  getRelation,
  remove,
  me,
} = require('../../controllers/user');

const routes = [
  {
    path: '/users',
    controller: [
      getAll,
    ],
    method: 'get',
  },
  {
    path: '/me',
    controller: [
      me,
    ],
    method: 'get',
  },
  {
    path: '/users/:userId',
    controller: [
      get,
    ],
    method: 'get',
  },
  {
    path: '/users/:userId/wishes',
    controller: [
      getRelation,
    ],
    method: 'get',
  },
  {
    path: '/users',
    controller: [
      create,
    ],
    method: 'post',
  },
  {
    path: '/users/:userId',
    controller: [
      update,
    ],
    method: 'patch',
  },
  {
    path: '/users/:userId',
    controller: [
      remove,
    ],
    method: 'delete',
  },
];

module.exports = routes;
