const Controller = require('.');
const Schema = require('../models/slot');


/**
 * @class
 */
class Slot extends Controller {
  /**
   * @constructor
   */
  constructor() {
    super(Schema, 'slot');
  }

  /**
   * @param {Array} array
   * @return {Object} returns this
   */
  setUpdatable() {
    this.updatable = ['name', 'startDate', 'endDate', 'open'];
    return this;
  }
}

module.exports = new Slot();
