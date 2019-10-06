const mongoose = require('mongoose');

const Model = require('.');
const helpers = require('./helpers');

mongoose.Promise = global.Promise;

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'name is required'],
      lowercase: true,
      validate: {
        validator(v) {
          return new Promise(resolve => {
            resolve(v && v.length > 2);
          });
        },
        message: 'name should be greater than two characters',
      },
    },
    username: {
      type: String,
      lowercase: true,
      required: [true, 'username is required'],
      unique: true,
    },
    email: {
      type: String,
      lowercase: true,
      required: [true, 'email is required'],
      unique: true,
    },
    profileImage: {
      type: String,
    },
    phone: {
      type: String,
      required: [true, 'phone is required'],
      unique: true,
    },
    street: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
      default: 'lagos',
    },
    country: {
      type: String,
      default: 'nigeria',
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
class User extends Model {
  /**
   * Builds query for getting all data
   * @param {String} search
   * @return {Object} returns a single model
   */
  static buildQuery(search) {
    this.query = search
      ? {
        $or: [
          { name: new RegExp(search) },
          { username: new RegExp(search) },
          { email: new RegExp(search) },
        ],
      }
      : {};
    return this;
  }
}

const uniqueFields = ['username', 'email', 'phone'];

UserSchema.post('save', (error, doc, next) => {
  if (error.name === 'MongoError' && error.code === 11000) {
    const duplicateRrror = helpers.GetDuplicateError(error, uniqueFields);
    return next(duplicateRrror);
  }

  if (error) {
    return next(error);
  }

  return next();
});

UserSchema.loadClass(User);

module.exports = mongoose.model('User', UserSchema);
