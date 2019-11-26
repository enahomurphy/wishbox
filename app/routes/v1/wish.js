const {
  get,
  getAll,
  create,
  update,
  remove,
} = require('../../controllers/wish');

const routes = [
  {
    path: '/wishes',
    controller: [
      getAll,
    ],
    method: 'get',
  },
  {
    path: '/wishes/:wishId',
    controller: [
      get,
    ],
    method: 'get',
  },
  {
    path: '/wishes',
    controller: [
      create,
    ],
    method: 'post',
  },
  {
    path: '/wishes/:wishId',
    controller: [
      update,
    ],
    method: 'patch',
  },
  {
    path: '/wishes/:wishId',
    controller: [
      remove,
    ],
    method: 'delete',
  },
];

module.exports = routes;
