const mongoose = require('mongoose');

const Model = require('./');
const helpers = require('./helpers');


mongoose.Promise = global.Promise;

const SlotSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'title is required'],
      lowercase: true,
      unique: [true, 'sloot with this title alreay exist'],
    },
    details: {
      type: String,
      default: '',
    },
    open: {
      type: Boolean,
      default: true,
    },
    startDate: {
      type: Date,
      required: [true, 'start date is required'],
    },
    endDate: {
      type: Date,
      required: [true, 'end date is required'],
    },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  },
);

/**
 * @Class
 */
class Wish extends Model {
  /**
   * @param {string} search
   * @return {object} returns a user
   */
  static buildQuery(search) {
    this.query = search ? {
      title: new RegExp(search),
      details: new RegExp(search),
    } : {};
    return this;
  }
}

const uniqueFields = ['title'];

SlotSchema.post('save', (error, doc, next) => {
  if (error.name === 'MongoError' && error.code === 11000) {
    const duplicateRrror = helpers.GetDuplicateError(error, uniqueFields);
    return next(duplicateRrror);
  }

  if (error) {
    return next(error);
  }

  return next(doc);
});

SlotSchema.loadClass(Wish);

module.exports = mongoose.model('Slot', SlotSchema);
