const Controller = require('.');
const Schema = require('../models/wish');


/**
 * @class
 */
class Wish extends Controller {
  /**
   * @constructor
   */
  constructor() {
    super(Schema, 'wish');
  }

  /**
   * @param {Array} array
   * @return {Object} returns this
   */
  setUpdatable() {
    this.updatable = ['title', 'details', 'wwee'];
    return this;
  }
}

module.exports = new Wish();
