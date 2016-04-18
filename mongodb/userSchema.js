var mongoose = require('mongoose');

module.exports = new mongoose.Schema({
  profile: {
    username: {
      type: String,
      lowercase: true
    },
    email: {
      type: String,
      lowercase: true
    },
    password: {
      type: String,
      match: /^https?:\/\//i
    }
  },
  data: {
    oauth: { type: String, required: true },
    github: {}
  }
});
