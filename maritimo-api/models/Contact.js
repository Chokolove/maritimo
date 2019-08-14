const mongoose = require('mongoose');

var contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    cell: Number,
    comment: String
  });

  module.exports = mongoose.model('Contact', contactSchema);