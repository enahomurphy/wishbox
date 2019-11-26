const mongoose = require('mongoose');
const mongoseDelete = require('mongoose-delete');

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
    deleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: 'deleted_at',
    },
  },
);

class Slot extends Model {
  static buildQuery(search) {
    const query = {};
    if (search.title) {
      query.title = new RegExp(search.title, 'gmi');
    }

    if (search.slotId) {
      query._id = search.slotId;
    }

    this.query = query;

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

SlotSchema.loadClass(Slot);
SlotSchema.plugin(mongoseDelete);

module.exports = mongoose.model('Slot', SlotSchema);
