// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  ip: {
    type: String,
    default: '::ffff:127.0.0.1',
  },
  location: {
    country: {
      type: String,
      default: 'Unknown',
    },
    state: {
      type: String,
      default: 'Unknown',
    },
    city: {
      type: String,
      default: 'Unknown',
    },
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  signupDate: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
