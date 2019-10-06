const winston = require('winston');

require('../server');

/**
 * @class
 */
module.exports = class Seed {
  /**
   * @constructor
   * @param {Object} schema object
   */
  constructor(schema) {
    this.data = [];
    this.schema = schema;
    if (this.generate === undefined) {
      throw new TypeError('Abstract class implements generate method');
    }
  }

  /**
   * wipes collection
   * @return {Object} returns object instance
   */
  wipe() {
    this.data = [];
    this.schema.collection.deleteMany();
    return this;
  }

  /**
   * generates array of data to be
   * inserted into a collection
   * @param {Integer} number
   * @return {Object} Object
   */
  build(number = 1) {
    for (let i = 0; i < number; i += 1) {
      this.data.push(i);
    }
    this.data = this.data.map(() => this.generate());
    return this;
  }

  /**
   * seeds all generated data
   * @param {limit} limit this amount of data to seed defaults to 1
   * @param {reset} reset specifices if collection should be
   * wipped defautls to true
   * @return {Promise} Object
   */
  seed(limit = 1, reset = true) {
    if (reset) {
      this.wipe();
    }

    return this
      .build(limit)
      .schema.insertMany(this.data);
  }

  /**
   * Inserts the data into the collection and exit
   * with a status of 0 if succesful or throws an error
   * if an error occurs
   * @return {void}
   */
  run() {
    if (['development', 'test'].includes(process.env.NODE_ENV)) {
      this.schema.insertMany(this.data)
        .then(() => {
          winston.log('info', 'seeding was successful');
          return true;
        })
        .catch(err => {
          throw new Error(err.message);
        });
    } else {
      process.exit(0);
    }
  }
};
