const mongoose = require('mongoose');

const formShema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  fileUrl: { type: String, required: true },
  email: { type: String, required: true },
});

module.exports = mongoose.model('Thing', formShema);