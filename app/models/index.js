const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);

module.exports = class Model {
  constructor() {
    this.query = {};
    if (this.buildQuery) {
      throw new Error('BuildQuery method must be implemented');
    }
  }

  static get(id) {
    return this.findById(id).lean();
  }

  static getAll(limit, page, search, where = {}) {
    limit = parseInt(limit, 10);
    limit = limit || 10;
    page = page || 1;
    const skip = limit * (page - 1);
    const result = { limit, currentPage: page };
    return new Promise((resolve, reject) => {
      this.buildQuery(search)
        .where(where)
        .find(this.query)
        .limit(limit)
        .skip(skip)
        .lean()
        .then(data => {
          result.data = data;
          this.buildQuery(search)
            .where(where)
            .find(this.query)
            .count()
            .then(count => {
              result.count = count;
              resolve(result);
            })
            .catch(error => reject(error));
        })
        .catch(error => reject(error));
    });
  }

  static delete(id) {
    return this.findByIdAndRemove(id);
  }

  static updateData(id, details) {
    const options = {
      new: true,
    };
    return this.findByIdAndUpdate(id, details, options);
  }
};
